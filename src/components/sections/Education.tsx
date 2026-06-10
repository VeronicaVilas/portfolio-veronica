'use client'

import { useRef, useEffect, useState, useCallback, memo } from 'react'
import { useLang, useT, type Lang } from '../../hooks/useLang'
import { useReveal } from '../../hooks/useReveal'
import { useScrollLock } from '../../hooks/useScrollLock'
import Modal from '../ui/Modal'
import { EDU_DEGREES, EDU_COURSES, MODAL_COURSES, type EduDegree, type EduCourse } from '../../data/education'

const EduCard = memo(function EduCard({
  degree,
  delay,
  lang,
}: {
  degree: EduDegree
  delay: 1 | 2
  lang: Lang
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  useReveal(cardRef)
  const t = (pt: string, en: string) => lang === 'pt' ? pt : en

  return (
    <div ref={cardRef} className={`edu-card reveal rd${delay}`}>
      <div className="edu-year">{degree.yearRange}</div>
      <div className="edu-degree">{t(degree.degreePt, degree.degreeEn)}</div>
      <div className="edu-school">{degree.school}</div>
      <span className="edu-chip">{t(degree.chipPt, degree.chipEn)}</span>
    </div>
  )
})

const CourseCard = memo(function CourseCard({
  course,
  delay,
  lang,
  onSeeMore,
  modalCount,
}: {
  course: EduCourse
  delay: 1 | 2 | 3
  lang: Lang
  onSeeMore?: () => void
  modalCount?: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  useReveal(cardRef)
  const t = (pt: string, en: string) => lang === 'pt' ? pt : en

  if (course.seemore) {
    return (
      <div
        ref={cardRef}
        className={`curso-card curso-card-seemore reveal rd${delay}`}
        onClick={onSeeMore}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onSeeMore?.()}
      >
        <div className="seemore-inner">
          <div className="seemore-icon">+</div>
          <div className="seemore-label">{t('Ver mais cursos', 'See more courses')}</div>
          <div className="seemore-count">
            +{modalCount} <span>{t('informais', 'informal')}</span>
          </div>
        </div>
      </div>
    )
  }

  if (course.inProgress) {
    return (
      <div ref={cardRef} className={`curso-card reveal rd${delay}`} style={{ borderStyle: 'dashed', opacity: 0.70 }}>
        <div className="curso-year">{t('em progresso', 'in progress')}</div>
        <div className="curso-name" style={{ color: 'var(--text3)' }}>
          {t('sempre aprendendo...', 'always learning...')}
        </div>
        <div className="curso-inst">{t('próximo curso', 'next course')}</div>
      </div>
    )
  }

  return (
    <div ref={cardRef} className={`curso-card reveal rd${delay}`}>
      <div className="curso-year">{course.year}</div>
      <div className="curso-name">{t(course.namePt, course.nameEn)}</div>
      <div className="curso-inst">{course.inst}</div>
    </div>
  )
})

export default function Education() {
  const t          = useT()
  const { lang }   = useLang()

  const [modalOpen, setModalOpen] = useState(false)
  const modalBodyRef              = useRef<HTMLDivElement>(null)

  const eyebrowRef      = useRef<HTMLDivElement>(null)
  const titleRef        = useRef<HTMLHeadingElement>(null)
  const coursesLabelRef = useRef<HTMLDivElement>(null)

  useReveal(eyebrowRef)
  useReveal(titleRef)
  useReveal(coursesLabelRef)
  useScrollLock(modalOpen)

  const informalCount = MODAL_COURSES.filter(c => !c.inProgress).length

  const openModal  = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  useEffect(() => {
    if (!modalOpen || !modalBodyRef.current) return
    const items = modalBodyRef.current.querySelectorAll<HTMLElement>('.mc-item')
    items.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateX(-10px)'
      el.style.transition = `opacity .4s ${i * 0.06}s, transform .4s ${i * 0.06}s`
      requestAnimationFrame(() => requestAnimationFrame(() => {
        el.style.opacity = ''
        el.style.transform = ''
      }))
    })
  }, [modalOpen])

  const delayFor = (i: number) => ([1, 2, 3, 1, 2, 3, 1][i] ?? 1) as 1 | 2 | 3

  return (
    <>
      <section id="formacao">
        <div ref={eyebrowRef} className="sec-eyebrow reveal">
          <span className="sec-num">04</span>
          <div className="sec-dash" />
          <span className="sec-label">
            {t('formação acadêmica & cursos', 'education & certifications')}
          </span>
        </div>

        <h2 ref={titleRef} className="sec-title reveal">
          <span>{t('Formação &', 'Education &')}</span><br />
          <em>{t('Cursos', 'Courses')}</em>
        </h2>

        <div className="edu-grid">
          {EDU_DEGREES.map((deg, i) => (
            <EduCard
              key={deg.id}
              degree={deg}
              delay={(i + 1) as 1 | 2}
              lang={lang}
            />
          ))}
        </div>

        <div style={{ marginTop: '3.5rem', position: 'relative', zIndex: 1 }}>
          <div ref={coursesLabelRef} className="cursos-eyebrow reveal">
            {t('cursos complementares', 'complementary courses')}
          </div>
          <div className="cursos-grid">
            {EDU_COURSES.map((course, i) => (
              <CourseCard
                key={course.id}
                course={course}
                delay={delayFor(i)}
                lang={lang}
                onSeeMore={openModal}
                modalCount={informalCount}
              />
            ))}
          </div>
        </div>
      </section>

      <Modal open={modalOpen} onClose={closeModal} labelledById="modal-edu-title">
        <div className="modal-box">
          <div className="modal-header">
            <div>
              <div className="modal-eyebrow">
                {t('cursos informais & complementares', 'informal & complementary courses')}
              </div>
              <h3 className="modal-title" id="modal-edu-title">
                {t('Todos os Cursos', 'All Courses')}
              </h3>
            </div>
            <button className="modal-close" onClick={closeModal} aria-label={t('Fechar modal', 'Close modal')}>
              ✕
            </button>
          </div>

          <div ref={modalBodyRef} className="modal-body">
            <div className="modal-courses-list">
              {MODAL_COURSES.map((course) => (
                <div key={course.id} className={`mc-item${course.inProgress ? ' mc-progress' : ''}`}>
                  <div className={`mc-dot${course.inProgress ? ' mc-dot-pulse' : ''}`} />
                  <div className="mc-content">
                    <div className="mc-name" style={course.inProgress ? { color: 'var(--text3)' } : undefined}>
                      {t(course.namePt, course.nameEn)}
                    </div>
                    <div className="mc-meta">
                      <span className="mc-inst">{course.inProgress ? t('próximo curso', 'next course') : course.inst}</span>
                      <span className="mc-year">{course.inProgress ? t('em progresso', 'in progress') : course.year}</span>
                    </div>
                    {course.tags.length > 0 && (
                      <div className="mc-tags">
                        {course.tags.map((tag) => (
                          <span key={tag} className="tech-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn-ghost" onClick={closeModal}>{t('Fechar', 'Close')}</button>
          </div>
        </div>
      </Modal>
    </>
  )
}
