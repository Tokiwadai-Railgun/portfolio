import { a } from "$lib/data/assets"
import { groupByCategory, groupByCategoryAlt } from "$lib/data/skills"
export async function load({platform}) {
  const {results} = await platform.env.DB.prepare("SELECT skills.slug, skills.name, logo, JSON_OBJECT('name', category.name, 'slug', category.slug) AS category FROM skills JOIN skills_category category ON skills.category = category.slug;"
  ).all();

  console.log('Hello')

  try {
    // For each skills retrieve the logo
    results.forEach((skill) => {
      skill.logo = a(skill.logo)
    });

    const groupedSkills = groupByCategoryAlt(results)
    return { skills : groupedSkills};
  } catch (err) {
    console.log("Error fetching data", err)
  }

}
