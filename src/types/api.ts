//tipagem de tudo que vem da API
export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type Button = {
  label: string
  url: string
}

export type Image = {
  alternativeText: string
  url: string
}

export type SocialLinks = {
  title: string
  url: string
}

export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks?: SocialLinks[]
  description: string
}

export type Review = {
  name: string
  text: string
  photo: Image
}

export type Question = {
  question: string
  answer: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: Button
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
