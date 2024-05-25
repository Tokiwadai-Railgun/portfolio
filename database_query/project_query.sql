SELECT 
    project.slug, 
    project.color, 
    project.description, 
    short_description AS shortDescription, 
    project.logo, 
    project.name, 
    start_date, 
    end_date, 
    type, 
    JSON_ARRAYAGG(JSON_OBJECT('to', `to`, 'label', label)) AS links,
    JSON_ARRAYAGG(JSON_OBJECT(
        'slug', s.slug,
        'color', s.color,
        'description', s.description,
        'logo', s.logo,
        'name', s.name,
        'category', s.category
    )) AS skills
FROM 
    project 
JOIN 
    link ON project.slug = link.related_slug 
JOIN 
    project_skill p_s ON p_s.project_slug = project.slug
JOIN 
    skills s ON s.slug = p_s.skill_slug
WHERE 
    project.slug = 'izuna-hatsuse'
GROUP BY 
    slug, color, description, short_description, logo, name, start_date, end_date, type;
