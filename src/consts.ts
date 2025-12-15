import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Aker',
  description:
    'Blog about PWN in the CTFs and Cybersecurity',
  href: 'https://akerdidik.github.io',
  author: 'Aker',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/Akerdidik',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/akerfr13nds',
    label: 'Twitter',
  },
  {
    href: '',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
