import { a } from '$lib/data/assets';

export async function load({ params, platform }: { params: Record<string, string> }) {
  if (!params.slug) return null
  const { results } = await platform.env.DB.prepare(`
    SELECT skills.slug, skills.name, logo, description, JSON_OBJECT('name', category.name, 'slug', category.slug) AS category 
    FROM skills JOIN skills_category category 
    ON skills.category = category.slug
    WHERE skills.slug = ?`
  ).bind(params.slug).all();


  try {

    results[0].logo = a(results[0].logo)

    // Now get related Projects
    const relatedQuery = await platform.env.DB.prepare(`
    SELECT 
        p.slug,
        p.name, 
        p.logo as img,
        CONCAT(p.name, ' (Project)') as display,
        CONCAT('/projects/', p.slug) as link
    FROM 
        project p
    JOIN 
        project_skill ps ON ps.project_slug = p.slug
    JOIN 
        skills s ON s.slug = ps.skill_slug
    WHERE 
        s.slug = ?;`
    ).bind(params.slug).all();


    relatedQuery.results.forEach(project => {
      project.img = a(project.img)
      project.url = `/projects/${project.slug}`
    });


    return { skill: results[0], related: relatedQuery.results}
  } catch (err) {
    console.log("Error fetching data", err)
  }
}
