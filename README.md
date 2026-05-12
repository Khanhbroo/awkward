# Awkward

**“Embracing the beauty of unconventional interactions.”**

---

## 👁️ The Concept

**Awkward** isn't just another UI library or a standard portfolio. It is a digital playground where the ranh giới between logic-driven code and visual art is intentionally blurred. 

The name "Awkward" celebrates the beauty in the unusual. It focuses on interactions that might feel "unconventional" at first—defying standard grid systems and predictable scroll behaviors—but are executed with such technical precision that they feel incredibly satisfying and "organic." This project is a showcase of how complex design concepts can be translated into high-performance, fluid web experiences.

---

## 🛠️ Tech Stack

| Core Engine | Animation & Motion | Styling & Utils |
| :--- | :--- | :--- |
| **React (Vite)** | **GSAP** (ScrollTrigger, Flip, Draggable) | **Tailwind CSS** (Custom Config) |
| **TypeScript** | **Lenis** (Smooth Scroll) | **Lucide React** (Icons) |

---

## 🏗️ Project Structure

```text
awkward/
├── src/
│   ├── components/        # Highly interactive React components
│   │   ├── AnimatedTitle.jsx
│   │   ├── RoundedCorner.jsx
│   │   └── Story.jsx
│   ├── hooks/             # Custom hooks for animation lifecycle
│   │   └── use-gsap.js    # Specialized GSAP context management
│   ├── styles/            # Tailwind layers and custom CSS variables
│   └── App.jsx            # Main entry with Lenis & GSAP initialization
├── public/                # High-fidelity assets
└── package.json           # Engineering dependencies
```

---

## ⚙️ Engineering Focus

### ⚡ Performance Optimization
Building complex animations requires a deep understanding of the browser's rendering pipeline. This project implements:
- **GSAP Context & Cleanup**: Ensuring zero memory leaks by properly disposing of animation instances.
- **Will-Change Optimizations**: Hinting the browser for GPU acceleration on heavy-transform elements.
- **FPS Stability**: Throttling and debouncing calculations to maintain a consistent 60+ FPS even during heavy ScrollTrigger events.

### 🔢 Math-based Animation
Logic over keyframes. Many interactions here are driven by:
- **Trigonometric Functions**: Using Sine and Cosine waves for organic, non-linear movement.
- **Velocity Tracking**: Real-time calculations of cursor velocity to influence the intensity of "squash and stretch" effects.
- **Lerp (Linear Interpolation)**: Creating smooth follow-through and lag effects for a premium feel.

### 📱 Responsive Motion
Motion should be universal. I use **GSAP MatchMedia** and relative units (vw/vh) to ensure that the "weight" and "feel" of animations remain consistent across mobile, tablet, and ultra-wide displays.

---

## ✨ Key Highlights

- **Fluid Interactions**: Experience UI that responds to the speed and direction of your movement.
- **Micro-animations**: Tiny, deliberate details in transitions that elevate the perceived quality of the entire application.
- **Clean Architecture**: Despite the complexity of the animation logic, the codebase remains modular, readable, and easy to scale.

---

## 📥 Installation & Setup

```bash
# Clone the showcase
git clone https://github.com/Khanhbroo/awkward.git

# Enter the laboratory
cd awkward

# Install dependencies
npm install

# Launch the experience
npm run dev
```

---

## 🔮 Future Roadmap

- [ ] **Shader Integration**: Implementing WebGL/Three.js shaders for advanced liquid and distortion effects.
- [ ] **Interaction Component Library**: Modularizing these unconventional interactions into a reusable NPM package.
- [ ] **Physics-based UI**: Moving from purely eased animations to full spring-physics interactions.

---

## 👨‍💻 Author

### **Khanh Doan (Khanhbroo)**
**Creative Software Engineer**

I specialize in the intersection of high-end design and robust engineering. My goal is to build digital products that don't just work—they perform and inspire.

---

## 🔗 Connect

[Explore my MacOS Portfolio](https://github.com/Khanhbroo/macos-portfolio)  
*Building the next generation of web experiences.*

---

**Feel free to star this repo if you find the interactions inspiring! ⭐**
