// ============================================
// JOIN FORM HANDLER
// ============================================

// Department-specific skills mapping
const departmentSkills = {
    "Human Resources": [
        "Recruitment & Talent Acquisition",
        "Employee Relations",
        "Training & Development",
        "Performance Management",
        "HR Analytics",
        "Organizational Development",
        "Conflict Resolution",
        "Onboarding & Orientation",
        "Compensation & Benefits",
        "HR Policy Development",
        "Workforce Planning",
        "Other"
    ],
    "Marketing & Communications": [
        "Digital Marketing",
        "Social Media Management",
        "Content Creation & Copywriting",
        "SEO/SEM",
        "Brand Strategy",
        "Public Relations",
        "Media Relations",
        "Graphic Design",
        "Video Production & Editing",
        "Event Planning & Management",
        "Email Marketing",
        "Marketing Analytics",
        "Other"
    ],
    "Technical Team": [
        "Web Development (Frontend)",
        "Web Development (Backend)",
        "Full-Stack Development",
        "Mobile App Development",
        "UI/UX Design",
        "Database Management",
        "Cloud Computing (AWS/Azure/GCP)",
        "DevOps & CI/CD",
        "Cybersecurity",
        "AI/Machine Learning",
        "Data Science & Analytics",
        "Software Testing/QA",
        "Other"
    ],
    "Business Development": [
        "Sales & Lead Generation",
        "Partnership Development",
        "Market Research & Analysis",
        "Business Strategy",
        "Negotiation Skills",
        "Client Relationship Management",
        "Proposal Writing",
        "Revenue Growth Strategies",
        "Competitive Analysis",
        "Networking",
        "Contract Management",
        "Other"
    ],
    "Project Management": [
        "Project Planning & Scheduling",
        "Agile/Scrum Methodologies",
        "Risk Management",
        "Budget Management",
        "Stakeholder Communication",
        "Resource Management",
        "Quality Assurance",
        "Team Coordination",
        "Project Documentation",
        "Problem Solving",
        "Microsoft Project/Jira",
        "Other"
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const joinForm = document.getElementById('join-form');
    const formMessage = document.getElementById('form-message');
    const departmentSelect = document.getElementById('department');
    const skillsContainer = document.getElementById('skills-container');
    const skillsInput = document.getElementById('skills');
    const otherSkillsContainer = document.getElementById('other-skills-container');
    const otherSkillsTextarea = document.getElementById('otherSkills');

    // Function to update hidden skills input value
    function updateSkillsValue() {
        const checkboxes = skillsContainer.querySelectorAll('input[type="checkbox"]:checked');
        const selectedSkills = Array.from(checkboxes)
            .map(cb => cb.value)
            .filter(val => val !== 'Other');

        // Check if "Other" is selected
        const otherChecked = Array.from(checkboxes).some(cb => cb.value === 'Other');

        if (otherChecked) {
            otherSkillsContainer.style.display = 'block';
            otherSkillsTextarea.setAttribute('required', 'required');
        } else {
            otherSkillsContainer.style.display = 'none';
            otherSkillsTextarea.removeAttribute('required');
            otherSkillsTextarea.value = '';
        }

        // Update hidden input (will add "Other" text during form submission)
        skillsInput.value = selectedSkills.join(', ');

        // Set required validation
        if (selectedSkills.length > 0 || otherChecked) {
            skillsInput.setCustomValidity('');
        } else {
            skillsInput.setCustomValidity('Please select at least one skill');
        }
    }

    // Handle department change to update skills checkboxes
    if (departmentSelect && skillsContainer) {
        departmentSelect.addEventListener('change', () => {
            const selectedDept = departmentSelect.value;

            // Clear current skills
            skillsContainer.innerHTML = '';

            // Hide other skills field
            otherSkillsContainer.style.display = 'none';
            otherSkillsTextarea.removeAttribute('required');
            otherSkillsTextarea.value = '';

            // Populate skills based on selected department
            if (selectedDept && departmentSkills[selectedDept]) {
                departmentSkills[selectedDept].forEach(skill => {
                    const checkboxWrapper = document.createElement('div');
                    checkboxWrapper.style.cssText = 'margin-bottom: 0.75rem; display: flex; align-items: center;';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.id = `skill-${skill.replace(/\s+/g, '-').toLowerCase()}`;
                    checkbox.value = skill;
                    checkbox.name = 'skill-checkbox';
                    checkbox.style.cssText = 'margin-right: 0.5rem; width: 18px; height: 18px; cursor: pointer;';

                    const label = document.createElement('label');
                    label.htmlFor = checkbox.id;
                    label.textContent = skill;
                    label.style.cssText = 'cursor: pointer; user-select: none; font-size: 0.95rem;';

                    checkboxWrapper.appendChild(checkbox);
                    checkboxWrapper.appendChild(label);
                    skillsContainer.appendChild(checkboxWrapper);

                    // Handle "Other" checkbox
                    checkbox.addEventListener('change', updateSkillsValue);
                });
            } else {
                skillsContainer.innerHTML = '<p style="color: var(--color-text-secondary); font-size: 0.9rem; margin: 0;">' +
                    (currentLang === 'en' ? 'Select a department first' : 'اختر قسماً أولاً') +
                    '</p>';
            }
        });
    }


    if (joinForm) {
        joinForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const checkboxes = skillsContainer.querySelectorAll('input[type="checkbox"]:checked');
            const selectedSkills = Array.from(checkboxes)
                .map(cb => cb.value)
                .filter(val => val !== 'Other');

            // Add "Other" skills if specified
            const otherChecked = Array.from(checkboxes).some(cb => cb.value === 'Other');
            if (otherChecked && otherSkillsTextarea.value.trim()) {
                selectedSkills.push(otherSkillsTextarea.value.trim());
            }

            const formData = {
                fullName: document.getElementById('fullName').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                universityId: document.getElementById('universityId').value.trim(),
                academicYear: document.getElementById('academicYear').value,
                faculty: document.getElementById('faculty').value,
                department: document.getElementById('department').value,
                motivation: document.getElementById('motivation').value.trim(),
                skills: selectedSkills.join(', '),
                linkedin: document.getElementById('linkedin').value.trim(),
                portfolio: document.getElementById('portfolio').value.trim()
            };

            // Get submit button
            const submitButton = joinForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            try {
                // Show loading state
                submitButton.disabled = true;
                submitButton.textContent = currentLang === 'en' ? 'Submitting...' : 'جاري الإرسال...';
                formMessage.style.display = 'none';

                // Send to backend
                const response = await fetch('https://erth.fly.dev/api/join', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    // Success
                    formMessage.style.display = 'block';
                    formMessage.style.background = 'var(--color-emerald-light, #d1fae5)';
                    formMessage.style.color = 'var(--color-emerald, #10b981)';
                    formMessage.style.border = '1px solid var(--color-emerald)';
                    formMessage.textContent = currentLang === 'en'
                        ? 'Thank you! Your application has been submitted successfully. We will review it and get back to you soon.'
                        : 'شكراً لك! تم إرسال طلبك بنجاح. سنقوم بمراجعته والتواصل معك قريباً.';

                    // Reset form
                    joinForm.reset();

                    // Reset skills checkboxes and hide other field
                    skillsContainer.innerHTML = '<p style="color: var(--color-text-secondary); font-size: 0.9rem; margin: 0;">' +
                        (currentLang === 'en' ? 'Select a department first' : 'اختر قسماً أولاً') +
                        '</p>';
                    skillsInput.value = '';
                    otherSkillsContainer.style.display = 'none';
                    otherSkillsTextarea.removeAttribute('required');

                    // Scroll to message
                    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else {
                    // Error
                    throw new Error(result.message || 'Submission failed');
                }
            } catch (error) {
                // Show error message
                formMessage.style.display = 'block';
                formMessage.style.background = 'var(--color-red-light, #fee2e2)';
                formMessage.style.color = 'var(--color-red, #ef4444)';
                formMessage.style.border = '1px solid var(--color-red)';
                formMessage.textContent = currentLang === 'en'
                    ? 'Oops! There was a problem submitting your application. Please try again or contact us directly.'
                    : 'عذراً! حدثت مشكلة أثناء إرسال طلبك. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.';

                console.error('Form submission error:', error);
            } finally {
                // Reset button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }
});
