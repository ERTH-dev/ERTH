# ERTH - Building Egypt's Future Corporate Leaders

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Website-Live-green.svg)](https://erth.dev)

**ERTH** is a student-led corporate simulation company at New Mansoura University, transforming university talent into enterprise-ready professionals through real-world projects, structured departments, and measurable performance standards.

## 🎯 Vision

To become the premier talent development ecosystem across Egyptian universities, producing enterprise-ready graduates who lead Egypt's corporate and entrepreneurial future.

## 🚀 Mission

To simulate authentic corporate environments where students develop professional competencies, experience real-world performance standards, and build the mindset required for corporate excellence.

## 📊 Our Impact

- **100+** Active Members
- **10+** Completed Projects
- **6** Specialized Departments
- **4** Growth Stages

## 🏢 Departments

ERTH operates through six specialized corporate departments:

1. **Executive Office** - Strategic leadership and organizational governance
2. **Human Resources** - Talent acquisition, development, and organizational culture
3. **Marketing & Communications** - Brand strategy, content creation, and market positioning
4. **Technical Team** - Technology infrastructure, development, and digital innovation
5. **Business Development** - Partnership cultivation, market expansion, and growth strategy
6. **Project Management** - End-to-end project delivery using industry-standard methodologies

## 🔬 Featured Projects

### AI-Powered Medical Imaging System
Automated chest X-ray analysis for pneumonia detection with AI chatbot interface and patient record tracking.

### Genome Browser Platform
Modern genomic visualization tool supporting GFF/GFF3 annotation files for research applications.

### AI Career Path Recommendation System
Intelligent platform analyzing student skills and personality to recommend optimal tech specializations with curated learning resources.

### Gym Management System
Comprehensive fitness center management with AI-powered personalized workout and nutrition planning.

### Social Engineering Awareness Project
Cybersecurity simulation demonstrating AI-enhanced social engineering risks through realistic voice-based scenarios.

### AI Text Moderation System
NLP-powered content moderation with context-aware language refinement for social media applications.

## 🌟 ERTH Evolution Model

Our strategic roadmap to national impact:

1. **Stage 1: Corporate Simulation Company** - Students experience authentic corporate structures and KPI-driven performance evaluation
2. **Stage 2: Student Consulting Firm** - Transition to real client projects with professional consulting services
3. **Stage 3: Project-Based Learning Incubator** - Develop industry partnerships for real-world learning opportunities
4. **Stage 4: Talent Accelerator** - Become the premier talent pipeline for corporations seeking pre-trained graduates

## 🛠️ Technology Stack

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Responsive design with modern UI/UX principles
- Bilingual support (English/Arabic)
- Progressive Web App features

### Backend
- Python Flask
- RESTful API architecture
- Email integration (SMTP)
- Environment-based configuration

### Deployment
- Frontend: Static hosting
- Backend: Fly.io
- Database: SQLite (development) / PostgreSQL (production ready)

## 📁 Project Structure

```
ERTH-main/
├── assets/
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   ├── images/        # Images and media
│   └── favicon.ico    # Site favicon
├── backend/
│   ├── app.py         # Flask application
│   ├── requirements.txt
│   └── fly.toml       # Fly.io configuration
├── *.html             # Website pages
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Modern web browser
- (Optional) Fly.io CLI for backend deployment

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ERTH.git
   cd ERTH
   ```

2. **Run the frontend**
   - Simply open `index.html` in your browser, or
   - Use a local server:
     ```bash
     python -m http.server 8000
     ```
   - Visit `http://localhost:8000`

3. **Run the backend (optional)**
   ```bash
   cd backend
   pip install -r requirements.txt
   python app.py
   ```
   - Backend runs on `http://localhost:5000`

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
FLASK_ENV=development
SECRET_KEY=your-secret-key
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=info@erth.dev
JOIN_EMAIL=recruitment@erth.dev
```

## 🌐 Deployment

### Frontend
Deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

### Backend (Fly.io)
```bash
cd backend
fly launch
fly deploy
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

- **Email**: info@erth.dev
- **Website**: [erth.dev](https://erth.dev)
- **Location**: New Mansoura University, Egypt

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- New Mansoura University for supporting student innovation
- All ERTH members for their dedication and hard work
- Our partners and mentors who guide our journey

---

**Built with ❤️ by ERTH Team** | © 2026 ERTH. All rights reserved.
