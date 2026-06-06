'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useLang } from '../../hooks/useLang'
import { useTheme } from '../../hooks/useTheme'

const NAV_LINKS = [
  { label: 'Experiência',  labelEn: 'Experience',   to: 'experiencia' },
  { label: 'Skills',       labelEn: 'Skills',        to: 'skills'      },
  { label: 'Projetos',     labelEn: 'Projects',      to: 'projetos'    },
  { label: 'Formação',     labelEn: 'Education',     to: 'formacao'    },
  { label: 'Depoimentos',  labelEn: 'Testimonials',  to: 'comentarios' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  const { theme, toggleTheme } = useTheme()
  const { lang, setLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const handleMobileLink = () => setMenuOpen(false)
  const t = (pt: string, en: string) => lang === 'pt' ? pt : en

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-[200]
          flex justify-between items-center
          px-12 py-4
          transition-all duration-[400ms]
          ${scrolled
            ? 'bg-[var(--nav-blur)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] border-b-[0.5px] border-[var(--border)]'
            : ''
          }
        `}
      >
        <span className="group relative font-playfair text-[1.05rem] italic text-[var(--sand)] tracking-[.02em] select-none cursor-default">
          Verônica Vilas
          <span className="
            hidden group-hover:inline
            absolute left-full top-0
            font-mono not-italic text-[.65rem] text-[var(--terra)]
            whitespace-nowrap pl-[6px]
          ">
            {'{ } // fullstack'}
          </span>
        </span>

        <ul className="hidden md:flex gap-[1.8rem] list-none">
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-66}
                className="
                  relative text-[.7rem] text-[var(--muted)]
                  tracking-[.1em] uppercase
                  transition-colors duration-300 cursor-pointer
                  after:content-[''] after:absolute after:bottom-[-3px] after:left-0
                  after:w-0 after:h-px after:bg-[var(--sand)]
                  after:transition-all after:duration-300
                  hover:text-[var(--sand)] hover:after:w-full
                "
              >
                {t(link.label, link.labelEn)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">

          <div className="hidden md:flex items-center gap-2">

            <button
              onClick={toggleTheme}
              className="
                w-[34px] h-[34px] rounded-full
                bg-[var(--bg3)] border-[0.5px] border-[var(--border2)]
                text-[var(--text2)] text-[.85rem]
                flex items-center justify-center
                transition-all duration-300
                hover:bg-[var(--bg4)] hover:text-[var(--sand)]
              "
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>

            <div className="flex border-[0.5px] border-[var(--border2)] rounded-[20px] overflow-hidden">
              {(['pt', 'en'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`
                    font-sans text-[.62rem] tracking-[.1em] uppercase
                    px-[.65rem] py-[.32rem]
                    transition-all duration-300
                    ${lang === l
                      ? 'bg-[var(--sand)] text-[var(--bg)] font-medium'
                      : 'text-[var(--text3)] bg-transparent'
                    }
                  `}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="/cv.pdf"
              download
              className="
                flex items-center gap-[6px]
                bg-transparent border-[0.5px] border-[var(--border2)]
                text-[var(--sand)] font-sans text-[.7rem] tracking-[.08em]
                py-[.5rem] px-[1rem] rounded-[2rem]
                transition-all duration-300
                hover:bg-[var(--tag-bg)] hover:border-[var(--sand)]
              "
            >
              <span>⬇</span>
              <span>{t('Currículo', 'Resume')}</span>
            </a>

            <Link
              to="contato"
              smooth={true}
              duration={600}
              offset={-66}
              className="
                font-sans text-[.7rem] tracking-[.08em] uppercase
                text-[var(--bg)] bg-[var(--sand)]
                px-[1.3rem] py-[.58rem] rounded-[2rem]
                transition-all duration-300 cursor-pointer
                hover:bg-[var(--cream)] hover:scale-[1.03]
              "
            >
              {t('Contato →', 'Contact →')}
            </Link>

          </div>

          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-[22px] h-[1.5px] bg-[var(--sand)] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-[22px] h-[1.5px] bg-[var(--sand)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[22px] h-[1.5px] bg-[var(--sand)] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>

        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[190] bg-[var(--bg)] flex flex-col items-center justify-center gap-8 md:hidden">

          <ul className="flex flex-col items-center gap-8 list-none">
            {[...NAV_LINKS, { label: 'Contato', labelEn: 'Contact', to: 'contato' }].map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-66}
                  onClick={handleMobileLink}
                  className="
                    font-playfair italic text-[2rem] font-bold
                    text-[var(--text)] hover:text-[var(--sand)]
                    transition-colors duration-300 cursor-pointer
                  "
                >
                  {t(link.label, link.labelEn)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-[.625rem] flex-wrap justify-center mt-4">

            <button
              onClick={toggleTheme}
              className="
                w-[34px] h-[34px] rounded-full
                bg-[var(--bg3)] border-[0.5px] border-[var(--border2)]
                text-[var(--text2)] text-[.85rem]
                flex items-center justify-center
                transition-all duration-300
              "
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>

            <div className="flex border-[0.5px] border-[var(--border2)] rounded-[20px] overflow-hidden">
              {(['pt', 'en'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`
                    font-sans text-[.62rem] tracking-[.1em] uppercase
                    px-[.65rem] py-[.32rem]
                    transition-all duration-300
                    ${lang === l
                      ? 'bg-[var(--sand)] text-[var(--bg)] font-medium'
                      : 'text-[var(--text3)] bg-transparent'
                    }
                  `}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="/cv.pdf"
              download
              onClick={handleMobileLink}
              className="
                flex items-center gap-[6px]
                bg-transparent border-[0.5px] border-[var(--border2)]
                text-[var(--sand)] font-sans text-[.7rem] tracking-[.08em]
                py-[.5rem] px-[1rem] rounded-[2rem]
                transition-all duration-300
                hover:bg-[var(--tag-bg)] hover:border-[var(--sand)]
              "
            >
              <span>⬇</span>
              <span>CV</span>
            </a>

          </div>
        </div>
      )}
    </>
  )
}
