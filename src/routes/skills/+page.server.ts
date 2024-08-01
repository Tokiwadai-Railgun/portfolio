import { a } from "$lib/data/assets"
import { groupByCategory, groupByCategoryAlt } from "$lib/data/skills"
import { mysqlconFn } from "$lib/utils/mysql"

export async function load() {
  const mysqlconn = await mysqlconFn()
  const query = "SELECT skills.slug, skills.name, logo, JSON_OBJECT('name', category.name, 'slug', category.slug) AS category FROM skills JOIN skills_category category ON skills.category = category.slug;"

  try {
    let result = await mysqlconn.query(query).then(function([rows, fields]){
      return rows;
    })

    // For each skills retrieve the logo
    result.forEach((skill) => {
      skill.logo = a(skill.logo)
    });

    const groupedSkills = groupByCategoryAlt(result)
    return { skills : groupedSkills};
  } catch (err) {
    console.log("Error fetching data", err)
  }

}
