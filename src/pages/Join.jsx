import { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import useAnimations from '../hooks/useAnimations';

const departmentSkills = {
  "Human Resources": [
    "Recruitment & Talent Acquisition", "Employee Relations", "Training & Development",
    "Performance Management", "HR Analytics", "Organizational Development",
    "Conflict Resolution", "Onboarding & Orientation", "Compensation & Benefits",
    "HR Policy Development", "Workforce Planning", "Other"
  ],
  "Marketing & Communications": [
    "Digital Marketing", "Social Media Management", "Content Creation & Copywriting",
    "SEO/SEM", "Brand Strategy", "Public Relations", "Media Relations",
    "Graphic Design", "Video Production & Editing", "Event Planning & Management",
    "Email Marketing", "Marketing Analytics", "Other"
  ],
  "Technical Team": [
    "Web Development (Frontend)", "Web Development (Backend)", "Full-Stack Development",
    "Mobile App Development", "UI/UX Design", "Database Management",
    "Cloud Computing (AWS/Azure/GCP)", "DevOps & CI/CD", "Cybersecurity",
    "AI/Machine Learning", "Data Science & Analytics", "Software Testing/QA", "Other"
  ],
  "Business Development": [
    "Sales & Lead Generation", "Partnership Development", "Market Research & Analysis",
    "Business Strategy", "Negotiation Skills", "Client Relationship Management",
    "Proposal Writing", "Revenue Growth Strategies", "Competitive Analysis",
    "Networking", "Contract Management", "Other"
  ],
  "Project Management": [
    "Project Planning & Scheduling", "Agile/Scrum Methodologies", "Risk Management",
    "Budget Management", "Stakeholder Communication", "Resource Management",
    "Quality Assurance", "Team Coordination", "Project Documentation",
    "Problem Solving", "Microsoft Project/Jira", "Other"
  ]
};

export default function Join() {
  const { lang, content } = useLanguage();
  const data = content.join;
  useAnimations();

  const [selectedDept, setSelectedDept] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [otherSkillsText, setOtherSkillsText] = useState('');
  const [showOther, setShowOther] = useState(false);
  const [formMessage, setFormMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleDeptChange = (e) => {
    const dept = e.target.value;
    setSelectedDept(dept);
    setSelectedSkills([]);
    setShowOther(false);
    setOtherSkillsText('');
  };

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev => {
      const next = prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill];
      setShowOther(next.includes('Other'));
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const skills = selectedSkills.filter(s => s !== 'Other');
    if (showOther && otherSkillsText.trim()) {
      skills.push(otherSkillsText.trim());
    }

    const formData = {
      fullName: e.target.fullName.value.trim(),
      email: e.target.email.value.trim(),
      phone: e.target.phone.value.trim(),
      universityId: e.target.universityId.value.trim(),
      academicYear: e.target.academicYear.value,
      faculty: e.target.faculty.value,
      department: e.target.department.value,
      motivation: e.target.motivation.value.trim(),
      skills: skills.join(', '),
      linkedin: e.target.linkedin.value.trim(),
      portfolio: e.target.portfolio.value.trim()
    };

    setSubmitting(true);
    setFormMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'c989f128-a600-47f3-841c-4a59e4cc30e8',
          subject: 'New ERTH Application - ' + formData.fullName,
          ...formData
        })
      });
      const result = await response.json();

      if (result.success) {
        setFormMessage({ type: 'success', text: lang === 'en'
          ? 'Thank you! Your application has been submitted successfully. We will review it and get back to you soon.'
          : 'شكراً لك! تم إرسال طلبك بنجاح. سنقوم بمراجعته والتواصل معك قريباً.' });
        formRef.current.reset();
        setSelectedDept('');
        setSelectedSkills([]);
        setShowOther(false);
        setOtherSkillsText('');
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setFormMessage({ type: 'error', text: lang === 'en'
        ? 'Oops! There was a problem submitting your application. Please try again or contact us directly.'
        : 'عذراً! حدثت مشكلة أثناء إرسال طلبك. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="radial-glow" style={{ top: '-10%', left: '20%' }}></div>
        <div className="container">
          <div className="hero-content text-center fade-in">
            <h1>{data.pageTitle}</h1>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto' }}>{data.pageSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="fade-in">{data.whyTitle}</h2>
          </div>
          <div className="grid grid-2">
            {data.whyPoints.map((point, i) => (
              <div className="glass-card fade-in" key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'rgba(11, 15, 25, 0.2)' }}>
        <div className="radial-glow-blue" style={{ bottom: '-15%', right: '15%' }}></div>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="fade-in">{data.processTitle}</h2>
          </div>
          <div className="grid grid-3">
            {data.processSteps.map((step, i) => (
              <div className="glass-card fade-in" key={i} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  margin: '0 auto 1.25rem', 
                  background: 'rgba(0, 245, 212, 0.1)', 
                  border: '1px solid rgba(0, 245, 212, 0.3)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--color-accent)', 
                  fontSize: '1.25rem', 
                  fontWeight: 800,
                  boxShadow: '0 0 15px rgba(0, 245, 212, 0.15)'
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section" id="application-form">
        <div className="radial-glow" style={{ top: '20%', left: '10%' }}></div>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <h2 className="fade-in">{data.formTitle}</h2>
            </div>

            <form id="join-form" className="glass-card fade-in" style={{ padding: '2.5rem' }} ref={formRef} onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', color: 'var(--color-accent)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                  {data.form.personalInfo}
                </h3>
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">{data.form.fullName}</label>
                  <input type="text" id="fullName" name="fullName" required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">{data.form.email}</label>
                  <input type="email" id="email" name="email" required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">{data.form.phone}</label>
                  <input type="tel" id="phone" name="phone" required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="universityId" className="form-label">{data.form.universityId}</label>
                  <input type="text" id="universityId" name="universityId" required className="form-input" />
                </div>
              </div>

              {/* Academic Information */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', color: 'var(--color-accent)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                  {data.form.academicInfo}
                </h3>
                <div className="form-group">
                  <label htmlFor="academicYear" className="form-label">{data.form.academicYear}</label>
                  <select id="academicYear" name="academicYear" required className="form-select">
                    <option value="">{data.form.selectYear}</option>
                    <option value="Level 1">{data.form.level1}</option>
                    <option value="Level 2">{data.form.level2}</option>
                    <option value="Level 3">{data.form.level3}</option>
                    <option value="Level 4">{data.form.level4}</option>
                    <option value="Level 5">{data.form.level5}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="faculty" className="form-label">{data.form.faculty}</label>
                  <select id="faculty" name="faculty" required className="form-select">
                    <option value="">{data.form.selectFaculty}</option>
                    <option value="Business">{data.form.business}</option>
                    <option value="Law">{data.form.law}</option>
                    <option value="Engineering">{data.form.engineering}</option>
                    <option value="Computer Science & Engineering">{data.form.cse}</option>
                    <option value="Science">{data.form.science}</option>
                    <option value="Medicine">{data.form.medicine}</option>
                    <option value="Dentistry">{data.form.dentistry}</option>
                    <option value="Pharmacy">{data.form.pharmacy}</option>
                    <option value="Applied Health Sciences Technology">{data.form.ahst}</option>
                    <option value="Nursing">{data.form.nursing}</option>
                    <option value="Textile Science Engineering">{data.form.textile}</option>
                    <option value="Social & Human Sciences">{data.form.social}</option>
                    <option value="Mass Media & Communication">{data.form.media}</option>
                    <option value="Physical Therapy">{data.form.physicalTherapy}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="department" className="form-label">{data.form.department}</label>
                  <select id="department" name="department" required className="form-select" value={selectedDept} onChange={handleDeptChange}>
                    <option value="">{data.form.selectDepartment}</option>
                    <option value="Human Resources">{data.form.dept.hr}</option>
                    <option value="Marketing & Communications">{data.form.dept.marketingComms}</option>
                    <option value="Technical Team">{data.form.dept.technical}</option>
                    <option value="Business Development">{data.form.dept.businessDev}</option>
                    <option value="Project Management">{data.form.dept.projectMgmt}</option>
                  </select>
                </div>
              </div>

              {/* Application Questions */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', color: 'var(--color-accent)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                  {data.form.applicationQuestions}
                </h3>
                <div className="form-group">
                  <label htmlFor="motivation" className="form-label">{data.form.motivation}</label>
                  <textarea id="motivation" name="motivation" required rows="5" className="form-textarea" />
                </div>

                <div className="form-group">
                  <label className="form-label">{data.form.skills}</label>
                  <div style={{ 
                    maxHeight: '260px', 
                    overflowY: 'auto', 
                    border: '1px solid var(--color-border)', 
                    borderRadius: '8px', 
                    padding: '1rem', 
                    background: 'rgba(5, 6, 8, 0.4)' 
                  }}>
                    {selectedDept && departmentSkills[selectedDept] ? (
                      departmentSkills[selectedDept].map(skill => (
                        <div key={skill} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                          <input
                            type="checkbox"
                            id={`skill-${skill.replace(/\s+/g, '-').toLowerCase()}`}
                            checked={selectedSkills.includes(skill)}
                            onChange={() => handleSkillToggle(skill)}
                            style={{ 
                              marginRight: lang === 'ar' ? undefined : '0.6rem', 
                              marginLeft: lang === 'ar' ? '0.6rem' : undefined, 
                              width: '18px', 
                              height: '18px', 
                              accentColor: 'var(--color-accent)',
                              cursor: 'pointer' 
                            }}
                          />
                          <label htmlFor={`skill-${skill.replace(/\s+/g, '-').toLowerCase()}`} style={{ cursor: 'pointer', userSelect: 'none', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                            {skill}
                          </label>
                        </div>
                      ))
                    ) : (
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>
                        {data.form.selectSkills}
                      </p>
                    )}
                  </div>
                  <small style={{ display: 'block', marginTop: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                    {data.form.skillsHint}
                  </small>
                </div>

                {showOther && (
                  <div className="form-group">
                    <label htmlFor="otherSkills" className="form-label">{data.form.otherSkills}</label>
                    <textarea id="otherSkills" name="otherSkills" rows="4" required value={otherSkillsText} onChange={(e) => setOtherSkillsText(e.target.value)} className="form-textarea" />
                  </div>
                )}
              </div>

              {/* Optional Links */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', color: 'var(--color-accent)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                  {data.form.optionalLinks}
                </h3>
                <div className="form-group">
                  <label htmlFor="linkedin" className="form-label">{data.form.linkedin}</label>
                  <input type="url" id="linkedin" name="linkedin" className="form-input" placeholder="https://linkedin.com/in/username" />
                </div>
                <div className="form-group">
                  <label htmlFor="portfolio" className="form-label">{data.form.portfolio}</label>
                  <input type="url" id="portfolio" name="portfolio" className="form-input" placeholder="https://github.com/username" />
                </div>
              </div>

              {/* Submit */}
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button type="submit" className="btn btn-primary" style={{ minWidth: '240px' }} disabled={submitting}>
                  {submitting ? (lang === 'en' ? 'Submitting...' : 'جاري الإرسال...') : data.form.submit}
                </button>
              </div>

              {formMessage && (
                <div style={{
                  marginTop: '1.5rem', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  background: formMessage.type === 'success' ? 'rgba(0, 245, 212, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  color: formMessage.type === 'success' ? 'var(--color-accent)' : '#ef4444',
                  border: `1px solid ${formMessage.type === 'success' ? 'rgba(0, 245, 212, 0.25)' : 'rgba(239, 68, 68, 0.25)'}`,
                  fontSize: '0.9rem',
                  textAlign: 'center'
                }}>
                  {formMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)', background: 'rgba(11, 15, 25, 0.2)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="fade-in">{data.expectationsTitle}</h2>
            <p className="lead fade-in" style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{data.expectationsText}</p>
          </div>
        </div>
      </section>
    </>
  );
}
