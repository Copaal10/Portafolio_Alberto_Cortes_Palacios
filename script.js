// Archivo: script.js - Scripts principales del portafolio web
// Este archivo contiene toda la lógica JavaScript del portafolio de Alberto Cortés Palacios
// Incluye funcionalidades para: línea de tiempo de experiencia,
// carrusel de proyectos, animaciones GSAP, y efectos de scroll
// Desarrollado con JavaScript vanilla (ES6) para compatibilidad y rendimiento

document.addEventListener('DOMContentLoaded', function() {
    // Evento DOMContentLoaded: Se ejecuta cuando el HTML ha sido completamente cargado y parseado
    
    // =========================================
    // 1. LÍNEA DE TIEMPO DE EXPERIENCIA
    // =========================================
    
    // Seleccionamos los elementos del DOM necesarios
    const experienciaElementosLineaTiempo = document.querySelectorAll('.timeline-item');
    const experienciaPanelDetalles = document.querySelector('.experience-details-panel');

    if (!experienciaPanelDetalles) {
        console.error('Panel de detalles de experiencia no encontrado!');
    } else {
        let experienciaElementoActivo = null;

        // Datos de experiencia con información detallada
        // Este objeto actúa como una pequeña base de datos local para cada trabajo
        const experienciaDatosExperiencia = {
            icbf2: {
                icon: "🏢",
                company: "ICBF – Segundo periodo",
                role: "Supernumerario",
                period: "Octubre 2025 - Noviembre 2025",
                description: "Apoyo administrativo en el Instituto Colombiano de Bienestar Familiar, enfocándome en programas de protección infantil y atención a usuarios institucionales.",
                responsibilities: [
                    "Apoyo administrativo en programas de protección infantil",
                    "Manejo de documentación y procesos internos",
                    "Atención y orientación a usuarios en servicios institucionales"
                ],
                achievements: [
                    "Mejora en procesos administrativos internos",
                    "Atención efectiva a usuarios institucionales",
                    "Contribución a programas de protección infantil"
                ],
                skills: ["Administración pública", "Protección infantil", "Atención al usuario", "Gestión documental"]
            },
            intelcost: {
                icon: "📦",
                company: "Intelcost",
                role: "SCM Professional",
                period: "Septiembre 2025",
                description: "Profesional en gestión de la cadena de suministro, optimizando procesos logísticos y control de costos en una empresa de consultoría.",
                responsibilities: [
                    "Gestión de la cadena de suministro y procesos logísticos",
                    "Optimización de inventarios y control de costos",
                    "Coordinación con proveedores y clientes para garantizar eficiencia"
                ],
                achievements: [
                    "Optimización de procesos logísticos",
                    "Reducción de costos operativos",
                    "Mejora en eficiencia de la cadena de suministro"
                ],
                skills: ["Cadena de suministro", "Logística", "Control de inventarios", "Gestión de costos"]
            },
            icbf1: {
                icon: "🏢",
                company: "ICBF – Primer periodo",
                role: "Supernumerario",
                period: "Agosto 2025 - Septiembre 2025",
                description: "Primer periodo como supernumerario en el ICBF, desarrollando habilidades administrativas en protección infantil.",
                responsibilities: [
                    "Apoyo administrativo en programas de protección infantil",
                    "Manejo de documentación y procesos internos",
                    "Atención y orientación a usuarios en servicios institucionales"
                ],
                achievements: [
                    "Desarrollo de habilidades administrativas",
                    "Contribución a procesos institucionales",
                    "Atención especializada a usuarios"
                ],
                skills: ["Administración institucional", "Protección infantil", "Gestión documental", "Atención al usuario"]
            },
            pies: {
                icon: "🦶",
                company: "Fundación Pies Descalzos",
                role: "Profesional administrativo y financiero",
                period: "Octubre 2024 - Marzo 2025",
                description: "Profesional administrativo y financiero en fundación dedicada a proyectos sociales y educativos, manejando presupuestos y reportes contables.",
                responsibilities: [
                    "Elaboración y control de presupuestos institucionales",
                    "Gestión de recursos financieros y reportes contables",
                    "Apoyo administrativo en proyectos sociales y educativos"
                ],
                achievements: [
                    "Control efectivo de presupuestos institucionales",
                    "Gestión financiera eficiente",
                    "Apoyo en proyectos sociales exitosos"
                ],
                skills: ["Gestión financiera", "Presupuestos", "Reportes contables", "Administración social"]
            },
            gente: {
                icon: "🧮",
                company: "Helisa",
                role: "Asistente de procesos",
                period: "Febrero 2023 - Octubre 2024",
                description: "Asistente de procesos en empresa de servicios, enfocándome en documentación, seguimiento de procedimientos y mejoras operativas.",
                responsibilities: [
                    "Documentación y seguimiento de procedimientos internos",
                    "Apoyo en la implementación de mejoras operativas",
                    "Coordinación con equipos para garantizar cumplimiento de metas"
                ],
                achievements: [
                    "Implementación de mejoras operativas",
                    "Cumplimiento de metas institucionales",
                    "Mejora en procedimientos internos"
                ],
                skills: ["Gestión de procesos", "Mejoras operativas", "Coordinación de equipos", "Documentación"]
            },
            redes: {
                icon: "🏥",
                company: "Cruz Roja",
                role: "Auxiliar de gestión de datos",
                period: "Enero 2023",
                description: "Auxiliar en gestión de datos, manejando bases de datos, reportes y verificación de información para análisis de gestión.",
                responsibilities: [
                    "Registro y actualización de información en bases de datos",
                    "Generación de reportes para análisis de gestión",
                    "Verificación y depuración de datos para asegurar calidad"
                ],
                achievements: [
                    "Mejora en calidad de datos",
                    "Generación de reportes precisos",
                    "Optimización de bases de datos"
                ],
                skills: ["Gestión de datos", "Bases de datos", "Reportes", "Análisis de datos"]
            },
            catapulta: {
                icon: "🚀",
                company: "Catapulta",
                role: "Asistente de producción",
                period: "Abril 2022 - Noviembre 2022",
                description: "Asistente de producción en empresa de desarrollo, coordinando actividades de producción, logística y eventos.",
                responsibilities: [
                    "Coordinación de actividades de producción y logística",
                    "Control de inventarios y materiales para proyectos",
                    "Apoyo en la ejecución de eventos y campañas"
                ],
                achievements: [
                    "Coordinación exitosa de proyectos de producción",
                    "Control eficiente de inventarios",
                    "Ejecución efectiva de eventos"
                ],
                skills: ["Producción", "Logística", "Control de inventarios", "Gestión de eventos"]
            },
            asic: {
                icon: "🏛️",
                company: "ASIC",
                role: "Aprendiz",
                period: "Octubre 2021 - Abril 2022",
                description: "Aprendiz en organización administrativa, aprendiendo procesos administrativos, gestión documental y normativas internas.",
                responsibilities: [
                    "Apoyo en procesos administrativos y de gestión documental",
                    "Aprendizaje y aplicación de normativas internas de la organización",
                    "Colaboración en proyectos de mejora continua"
                ],
                achievements: [
                    "Aprendizaje de normativas administrativas",
                    "Contribución a proyectos de mejora",
                    "Desarrollo de habilidades administrativas"
                ],
                skills: ["Administración", "Gestión documental", "Normativas", "Mejora continua"]
            },
            judicial: {
                icon: "⚖️",
                company: "Dirección Seccional + Dirección Ejecutiva Rama Judicial",
                role: "Escribiente municipal",
                period: "Octubre 2018 - Enero 2020",
                description: "Escribiente municipal en rama judicial, manejando documentación oficial, actas judiciales y archivos.",
                responsibilities: [
                    "Redacción y digitación de documentos oficiales y actas judiciales",
                    "Organización y archivo físico y digital de expedientes",
                    "Apoyo administrativo en trámites internos de la entidad"
                ],
                achievements: [
                    "Organización eficiente de expedientes",
                    "Redacción precisa de documentos oficiales",
                    "Manejo confidencial de información judicial"
                ],
                skills: ["Documentación jurídica", "Archivo", "Redacción oficial", "Confidencialidad"]
            },
            expreso: {
                icon: "🚌",
                company: "Expreso Bolivariano S.A.",
                role: "Auxiliar de ingresos",
                period: "Enero 2017 - Mayo 2018",
                description: "Auxiliar de ingresos en empresa de transporte, manejando registro de ingresos, caja y atención al cliente.",
                responsibilities: [
                    "Registro y control de ingresos diarios en sistema contable",
                    "Manejo de caja y conciliación de valores recibidos",
                    "Atención al cliente en procesos de facturación y recaudo"
                ],
                achievements: [
                    "Conciliación precisa de valores",
                    "Manejo responsable de caja",
                    "Atención efectiva al cliente"
                ],
                skills: ["Conciliación financiera", "Manejo de caja", "Atención al cliente", "Facturación"]
            },
            centaurus: {
                icon: "📦",
                company: "Centaurus (Temporales + Mensajeros)",
                role: "Patinador",
                period: "Abril 2014 - Febrero 2015",
                description: "Patinador en empresa de mensajería, entregando documentos y paquetes con eficiencia y seguridad.",
                responsibilities: [
                    "Entrega y distribución de documentos y paquetes en tiempos establecidos",
                    "Manejo de rutas urbanas garantizando eficiencia y seguridad",
                    "Apoyo logístico en tareas operativas de mensajería"
                ],
                achievements: [
                    "Entregas puntuales y seguras",
                    "Optimización de rutas urbanas",
                    "Desarrollo de habilidades logísticas"
                ],
                skills: ["Logística urbana", "Entregas", "Rutas", "Seguridad"]
            }
        };

        // Función para actualizar el panel de detalles dinámicamente
        function experienciaActualizarPanelDetalles(claveExperiencia) {
            const datos = experienciaDatosExperiencia[claveExperiencia];
            if (!datos) {
                console.error('No data found for experience:', claveExperiencia);
                return;
            }

            // Actualizamos el contenido del panel manipulando el DOM directamente para mayor rendimiento
            // en lugar de reescribir todo el innerHTML
            const iconEl = experienciaPanelDetalles.querySelector('.details-icon');
            const titleEl = experienciaPanelDetalles.querySelector('h3');
            const subtitleEl = experienciaPanelDetalles.querySelector('.details-subtitle');
            const descriptionEl = experienciaPanelDetalles.querySelector('.details-description');
            const responsibilitiesUl = experienciaPanelDetalles.querySelector('.details-section:nth-child(1) ul');
            const achievementsUl = experienciaPanelDetalles.querySelector('.details-section:nth-child(2) ul');
            const skillsDiv = experienciaPanelDetalles.querySelector('.skills-tags');

            if (iconEl) iconEl.textContent = datos.icon;
            if (titleEl) titleEl.textContent = datos.company;
            if (subtitleEl) subtitleEl.textContent = `${datos.role} • ${datos.period}`;
            if (descriptionEl) descriptionEl.textContent = datos.description;
            
            if (responsibilitiesUl) responsibilitiesUl.innerHTML = datos.responsibilities.map(resp => `<li>${resp}</li>`).join('');
            if (achievementsUl) achievementsUl.innerHTML = datos.achievements.map(ach => `<li>${ach}</li>`).join('');
            if (skillsDiv) skillsDiv.innerHTML = datos.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');

            // Animación de entrada con efectos mejorados usando GSAP
            const experienciaAnimacionLineaTiempo = gsap.timeline();

            // Fade In inicial del panel
            experienciaAnimacionLineaTiempo.fromTo(experienciaPanelDetalles,
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
            );

            // Animar título con efecto rebote
            experienciaAnimacionLineaTiempo.fromTo(experienciaPanelDetalles.querySelector('h3'),
                { opacity: 0, x: -20, rotation: -5 },
                { opacity: 1, x: 0, rotation: 0, duration: 0.3, ease: 'power2.out' },
                '-=0.2'
            );

            // Animar subtítulo
            experienciaAnimacionLineaTiempo.fromTo(experienciaPanelDetalles.querySelector('.details-subtitle'),
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
                '-=0.2'
            );

            // Animar descripción
            experienciaAnimacionLineaTiempo.fromTo(experienciaPanelDetalles.querySelector('.details-description'),
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
                '-=0.1'
            );

            // Animar secciones con escalonado (stagger)
            const secciones = experienciaPanelDetalles.querySelectorAll('.details-section');
            experienciaAnimacionLineaTiempo.fromTo(secciones,
                { opacity: 0, x: -30, scale: 0.9 },
                { opacity: 1, x: 0, scale: 1, duration: 0.4, stagger: 0.15, ease: 'power2.out' },
                '-=0.2'
            );

            // Animar items de lista con rebote
            const elementosLista = experienciaPanelDetalles.querySelectorAll('li');
            experienciaAnimacionLineaTiempo.fromTo(elementosLista,
                { opacity: 0, x: -20, scale: 0.8 },
                { opacity: 1, x: 0, scale: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(1.3)' },
                '-=0.3'
            );

            // Animar etiquetas de habilidades con efecto elástico
            const etiquetasHabilidades = experienciaPanelDetalles.querySelectorAll('.skill-tag');
            experienciaAnimacionLineaTiempo.fromTo(etiquetasHabilidades,
                { opacity: 0, scale: 0, rotation: -180 },
                { opacity: 1, scale: 1, rotation: 0, duration: 0.5, stagger: 0.1, ease: 'elastic.out(1, 0.3)' },
                '-=0.4'
            );

            // Animación continua sutil para etiquetas de habilidades
            gsap.to(etiquetasHabilidades, {
                y: 'random(-2, 2)',
                duration: 'random(2, 3)',
                ease: 'power1.inOut',
                stagger: 0.1,
                repeat: -1,
                yoyo: true
            });
        }

        // Función para ocultar el panel de detalles
        function experienciaOcultarPanelDetalles() {
            gsap.to(experienciaPanelDetalles, {
                opacity: 0,
                scale: 0.9,
                rotationY: 15,
                duration: 0.4,
                ease: 'back.in(1.2)',
                onComplete: () => {
                    experienciaPanelDetalles.style.display = 'none';
                }
            });
        }

        // Agregar funcionalidad de click y hover a los items de la línea de tiempo
        experienciaElementosLineaTiempo.forEach((item, index) => {
            const experienceKey = item.getAttribute('data-experience');

            // Aseguramos que el item sea clickable visualmente
            item.style.cursor = 'pointer';

            // Evento Click: Mantiene el item activo
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Animación de click en el marcador
                const marker = item.querySelector('.timeline-marker');
                gsap.to(marker, {
                    scale: 1.2,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut'
                });

                // Remover estado selected de todos los items
                experienciaElementosLineaTiempo.forEach(i => {
                    i.classList.remove('selected', 'active');
                });

                // Agregar estado selected al item clickeado
                item.classList.add('selected', 'active');
                experienciaElementoActivo = item;

                // Mostrar detalles y mantener visibles
                experienciaPanelDetalles.style.display = 'block';

                // Animación de entrada para el panel
                gsap.fromTo(experienciaPanelDetalles,
                    { opacity: 0, scale: 0.8, rotationY: -15 },
                    { opacity: 1, scale: 1, rotationY: 0, duration: 0.5, ease: 'back.out(1.2)' }
                );

                experienciaActualizarPanelDetalles(experienceKey);
            });

            // Evento MouseEnter: Efecto visual hover
            item.addEventListener('mouseenter', () => {
                if (!experienciaElementoActivo || experienciaElementoActivo !== item) {
                    const marker = item.querySelector('.timeline-marker');
                    gsap.to(marker, {
                        boxShadow: '0 8px 25px rgba(255, 212, 102, 0.6)',
                        scale: 1.05,
                        duration: 0.3,
                        ease: 'power2.out'
                    });

                    if (!item.classList.contains('selected')) {
                        item.classList.add('active');
                    }
                }
            });

            // Evento MouseLeave: Limpiar efectos hover
            item.addEventListener('mouseleave', () => {
                const marker = item.querySelector('.timeline-marker');
                if (!item.classList.contains('selected')) {
                    gsap.to(marker, {
                        boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                        scale: 1,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }

                if (!item.classList.contains('selected')) {
                    item.classList.remove('active');
                }

                // Ocultar panel solo si no hay item seleccionado y no se está haciendo hover en ningún item
                setTimeout(() => {
                    if (!experienciaElementoActivo && !document.querySelector('.timeline-item:hover')) {
                        experienciaOcultarPanelDetalles();
                    }
                }, 100);
            });
        });

        // Ocultar detalles cuando el mouse sale de toda la línea de tiempo
        document.querySelector('.timeline').addEventListener('mouseleave', () => {
            if (!experienciaElementoActivo) {
                setTimeout(() => {
                    if (!document.querySelector('.timeline-item:hover')) {
                        experienciaElementosLineaTiempo.forEach(i => i.classList.remove('active'));
                        experienciaOcultarPanelDetalles();
                    }
                }, 100);
            }
        });

        // Inicializar con la primera experiencia seleccionada automáticamente
        if (experienciaElementosLineaTiempo.length > 0) {
            const firstItem = experienciaElementosLineaTiempo[0];
            const firstExperienceKey = firstItem.getAttribute('data-experience');

            firstItem.classList.add('active', 'selected');
            experienciaElementoActivo = firstItem;
            experienciaPanelDetalles.style.display = 'block';

            // Animación espectacular de entrada para la primera carga
            gsap.set(experienciaPanelDetalles, { opacity: 0, scale: 0.5, rotationY: -45 });
            gsap.to(experienciaPanelDetalles, {
                opacity: 1,
                scale: 1,
                rotationY: 0,
                duration: 0.8,
                ease: 'back.out(1.7)',
                onComplete: () => {
                    experienciaActualizarPanelDetalles(firstExperienceKey);
                }
            });

            // Animación de entrada para los marcadores de la línea de tiempo
            gsap.fromTo(experienciaElementosLineaTiempo,
                { opacity: 0, y: 50, scale: 0.8 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)', delay: 0.3 }
            );
        }
    }

    // =========================================
    // 2. FILTRADO DE PROYECTOS
    // =========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length && projectCards.length) {
        // Función para filtrar proyectos según la categoría
        function filterProjects(category) {
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    card.classList.add('showing');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('showing');
                }
            });
        }

        // Agregar listeners a los botones de filtro
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover clase active de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Agregar clase active al botón clickeado
                this.classList.add('active');

                // Obtener el valor del filtro
                const filterValue = this.getAttribute('data-filter');

                // Ejecutar filtrado
                filterProjects(filterValue);
                
                // Efecto de click con GSAP
                gsap.to(this, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut'
                });
            });
        });

        // Inicializar con el filtro 'all' activo
        const allButton = document.querySelector('.filter-btn[data-filter="all"]');
        if (allButton) allButton.classList.add('active');
    }

    // =========================================
    // 3. ANIMACIONES GENERALES Y SCROLL
    // =========================================
    
    // Animaciones de entrada iniciales con GSAP
    gsap.from('.hero-title', {y:30, opacity:0, duration:0.9, ease:'power3.out'});
    gsap.from('.hero-sub', {y:18, opacity:0, duration:0.9, delay:0.15});
    gsap.from('.btn-animated', {scale:0.96, opacity:0, stagger:0.08, delay:0.28});
    
    // Animar títulos de sección al hacer scroll usando Intersection Observer simulado con GSAP ScrollTrigger (lógica manual simple)
    gsap.utils.toArray('.section-title').forEach((el,i)=> gsap.from(el,{y:18, opacity:0, delay:0.12+i*0.08}));

    // Efecto de hover en tarjetas de proyectos
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Animación de botones de filtro
    gsap.fromTo('.filter-btn',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, delay: 0.1 }
    );

    // Efecto de hover en tarjetas de herramientas (software)
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -8,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Scroll suave para enlaces de navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Compensar por la navbar fija
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Cambio de fondo de la navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});