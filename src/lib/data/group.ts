import Assets from "./assets";
import type { GroupMember } from "../types";

export const items: Array<GroupMember> = [
  {
    slug: "anthony",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    photo: Assets.Anthony,
    name: "Anthony Martignon -- Strack",
    company: { 
      name: "Ministère des finances", 
      logo: "none", 
      address: "Dans Paris", 
      description: "une entreprise qui gère deux trois comptes par-ci par-là"
    },
    cv: "cv_anthony.pdf"
  },
  {
    slug: "maxence",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    photo: Assets.Maxence,
    name: "Maxence Miquel",
    company: { 
      name: "Appimac", 
      logo: "none", 
      address: "Dans Paris", 
      description: "une entreprise qui gère deux trois comptes par-ci par-là"
    },
    cv: "cv_maxence.pdf"
  },
  {
    slug: "thomas",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    photo: Assets.Thomas,
    name: "Thomas Verdier",
    company: { 
      name: "Ecole de Police", 
      logo: "none", 
      address: "Dans Paris", 
      description: "une entreprise qui gère deux trois comptes par-ci par-là"
    },
    cv: "cv_thomas.pdf"
  },
]
