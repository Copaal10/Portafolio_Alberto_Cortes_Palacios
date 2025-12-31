// Archivo: script.js - Scripts principales del portafolio web
// Este archivo contiene toda la lógica JavaScript del portafolio de Alberto Cortés Palacios
// Incluye funcionalidades para: hexágonos de habilidades, línea de tiempo de experiencia,
// carrusel de proyectos, animaciones GSAP, y efectos de scroll
// Desarrollado con JavaScript vanilla (ES5/ES6) para compatibilidad y rendimiento

// Funcionalidad de los hexágonos de habilidades - Sistema interactivo para mostrar detalles de habilidades
// Este script maneja la interacción de los hexágonos que muestran información detallada de cada habilidad
document.addEventListener('DOMContentLoaded', function() {
    // Evento DOMContentLoaded: Se ejecuta cuando el HTML ha sido completamente cargado y parseado
    // Funcionalidad de los hexágonos de habilidades
    var hexagonosHabilidades = document.querySelectorAll('.hexagon-skill');
    // Selecciona todos los elementos con clase 'hexagon-skill' (hexágonos de habilidades)
    var panelDetallesHabilidad = document.querySelector('.skill-details-panel');
    // Selecciona el panel donde se mostrarán los detalles de la habilidad seleccionada

    if (panelDetallesHabilidad) {
        // Verifica si el panel existe antes de continuar con la configuración
        // Datos de habilidades - Objeto que contiene toda la información de las habilidades organizadas
        var datosHabilidades = {
            auditoria: {
                // Propiedad del objeto: contiene datos de la habilidad de auditoría
                icono: "fas fa-shield-alt", // Icono de FontAwesome para esta habilidad
                titulo: "Auditoría y Control", // Título de la habilidad
                descripcion: "Experiencia sólida en auditoría interna y externa, control presupuestal y gestión de riesgos en entornos administrativos y financieros.",
                // Descripción detallada de la habilidad
                competencias: [
                    // Array de competencias específicas
                    "Auditoría interna y externa de procesos administrativos",
                    "Control presupuestal y análisis financiero",
                    "Evaluación y gestión de riesgos operativos",
                    "Revisión de cumplimiento normativo y regulatorio",
                    "Elaboración de informes de auditoría y recomendaciones",
                    "Implementación de controles internos efectivos"
                ],
                aplicaciones: [
                    // Array de aplicaciones prácticas
                    "Optimización de procesos administrativos",
                    "Reducción de riesgos financieros",
                    "Mejora en el cumplimiento organizacional",
                    "Implementación de mejores prácticas de control"
                ],
                herramientas: ["Auditbrain", "Excel Avanzado", "Power BI", "SAP"]
                // Array de herramientas utilizadas
            },
            tecnicas: {
                // Propiedad para habilidades técnicas/desarrollo
                icon: "fas fa-code", // Icono de código/programación
                title: "Técnicas", // Título de la categoría
                description: "Conocimientos sólidos en programación, desarrollo web, bases de datos y metodologías ágiles para soluciones tecnológicas eficientes.",
                // Descripción de las habilidades técnicas
                competencias: [
                    // Lista de competencias técnicas
                    "Programación (Java, Python, HTML, CSS, JavaScript)",
                    "Gestión de bases de datos (SQL, MySQL)",
                    "Desarrollo de APIs y integración de sistemas",
                    "Testing funcional y automatización",
                    "Diseño de interfaces web responsivas",
                    "Metodologías ágiles (Scrum, Kanban, Lean)"
                ],
                aplicaciones: [
                    // Aplicaciones prácticas de las habilidades técnicas
                    "Desarrollo de aplicaciones web",
                    "Automatización de procesos administrativos",
                    "Análisis de datos y business intelligence",
                    "Implementación de soluciones digitales"
                ],
                herramientas: ["VS Code", "Eclipse", "Postman", "Git/GitHub"]
                // Herramientas utilizadas en desarrollo
            },
            blandas: {
                // Propiedad para habilidades blandas/interpersonales
                icono: "fas fa-users",
                titulo: "Blandas",
                descripcion: "Habilidades interpersonales desarrolladas para el trabajo en equipo, liderazgo y comunicación efectiva en entornos profesionales.",
                competencias: [
                    "Liderazgo y gestión de equipos",
                    "Comunicación asertiva y efectiva",
                    "Pensamiento crítico y resolución de problemas",
                    "Trabajo en equipo colaborativo",
                    "Gestión del tiempo y organización",
                    "Adaptabilidad y aprendizaje continuo"
                ],
                aplicaciones: [
                    "Coordinación de proyectos multidisciplinarios",
                    "Mentoría y desarrollo de talento",
                    "Negociación y resolución de conflictos",
                    "Presentaciones ejecutivas impactantes"
                ],
                herramientas: ["Trello", "Jira", "Microsoft Teams", "Slack"]
            }
        };

        // Función para actualizar los detalles de la habilidad seleccionada
        // Esta función cambia el contenido del panel cuando el usuario hace click en un hexágono
        function actualizarDetallesHabilidad(claveHabilidad) {
            // Función que actualiza el panel de detalles cuando se hace click en un hexágono
            var datos = datosHabilidades[claveHabilidad];
            // Obtiene los datos de la habilidad desde el objeto datosHabilidades usando la clave
            if (!datos) {
                return;
                // Si no existen datos para esa habilidad, termina la función
            }

            panelDetallesHabilidad.innerHTML = `
                // innerHTML: Actualiza el contenido HTML del panel de detalles
                <div class="skill-details-content">
                    <div class="skill-header">
                        <div class="skill-icon-large">
                            <i class="${datos.icono}"></i>
                            <!-- Icono grande usando FontAwesome con la clase del icono -->
                        </div>
                        <div class="skill-info">
                            <h3>${datos.titulo}</h3>
                            <!-- Título de la habilidad -->
                            <p class="skill-description">${datos.descripcion}</p>
                            <!-- Descripción de la habilidad -->
                        </div>
                    </div>

                    <div class="skill-details-grid">
                        <!-- Grid de 3 columnas para mostrar competencias, aplicaciones y herramientas -->
                        <div class="skill-detail-card">
                            <h5><i class="fas fa-tasks"></i> Competencias</h5>
                            <!-- Sección de competencias con icono -->
                            <ul>
                                ${datos.competencias.map(function(comp) {
                                    return `<li>${comp}</li>`;
                                }).join('')}
                                <!-- map(): Transforma cada competencia en un elemento <li> -->
                                <!-- join(''): Une todos los elementos <li> en un string -->
                            </ul>
                        </div>

                        <div class="skill-detail-card">
                            <h5><i class="fas fa-chart-line"></i> Aplicaciones</h5>
                            <!-- Sección de aplicaciones prácticas -->
                            <ul>
                                ${datos.aplicaciones.map(function(app) {
                                    return `<li>${app}</li>`;
                                }).join('')}
                                <!-- Mapea cada aplicación a un elemento de lista -->
                            </ul>
                        </div>

                        <div class="skill-detail-card">
                            <h5><i class="fas fa-tools"></i> Herramientas</h5>
                            <!-- Sección de herramientas utilizadas -->
                            <div class="tool-tags">
                                ${datos.herramientas.map(function(herramienta) {
                                    return `<span class="tool-tag">${herramienta}</span>`;
                                }).join('')}
                                <!-- Crea etiquetas (tags) para cada herramienta -->
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Animate in - Animar la entrada del panel
            gsap.fromTo(panelDetallesHabilidad, {
                opacity: 0,
                y: 30,
                scale: 0.95
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: 'back.out(1.7)'
            });
        }

        // Agregar funcionalidad de click a los hexágonos de habilidades
        hexagonosHabilidades.forEach(function(habilidad) {
            // forEach: Itera sobre cada elemento hexágono encontrado
            habilidad.addEventListener('click', function() {
                // addEventListener: Asigna un evento de click a cada hexágono
                var claveHabilidad = this.getAttribute('data-skill');
                // getAttribute: Obtiene el valor del atributo 'data-skill' del elemento clickeado

                // Remove active class from all skills - Remover clases activas de todos los skills
                hexagonosHabilidades.forEach(function(s) {
                    s.classList.remove('active', 'selected');
                });
                // classList.remove: Quita las clases CSS 'active' y 'selected' de todos los hexágonos

                // Add selected class to clicked skill - Agregar clase seleccionada al skill clickeado
                this.classList.add('selected');
                // classList.add: Agrega la clase 'selected' al elemento actual (this)

                // Update details - Actualizar los detalles mostrados
                actualizarDetallesHabilidad(claveHabilidad);
                // Llama a la función que actualiza el panel de detalles
            });

            // Hover effects - Efectos al pasar el mouse (hover)
            skill.addEventListener('mouseenter', function() {
                // mouseenter: Se ejecuta cuando el mouse entra en el elemento
                if (!this.classList.contains('selected')) {
                    // Verifica si el elemento NO tiene la clase 'selected'
                    this.classList.add('active');
                    // Agrega clase 'active' para efecto visual de hover
                }
            });

            skill.addEventListener('mouseleave', function() {
                // mouseleave: Se ejecuta cuando el mouse sale del elemento
                if (!this.classList.contains('selected')) {
                    // Verifica si el elemento NO está seleccionado
                    this.classList.remove('active');
                    // Remueve la clase 'active'
                }
            });
        });

        // Initialize with first skill - Inicializar con el primer skill activo
        if (hexagonosHabilidades.length > 0) {
            // Verifica que existan hexágonos antes de hacer click
            hexagonosHabilidades[0].click();
            // Simula un click en el primer hexágono para mostrar sus detalles inicialmente
        }
    }

    // Funcionalidad de hover y click de la línea de tiempo - Sistema para mostrar detalles de experiencia laboral
    var elementosLineaTiempo = document.querySelectorAll('.timeline-item');
    // Selecciona todos los elementos de la línea de tiempo
    var panelDetallesExperiencia = document.querySelector('.experience-details-panel');
    // Selecciona el panel donde se mostrarán los detalles de la experiencia

    if (!panelDetallesExperiencia) {
        console.error('Panel de detalles de experiencia no encontrado!');
        return;
    }

    var elementoActivo = null; // Rastrea el elemento actualmente activo

    // Datos de experiencia con información detallada
    var datosExperiencia = {
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
            icon: "�",
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

    // Función para actualizar el panel de detalles
    function actualizarPanelDetalles(claveExperiencia) {
        const datos = datosExperiencia[claveExperiencia];
        if (!datos) {
            console.error('No data found for experience:', claveExperiencia);
            return;
        }

        // Update existing elements instead of replacing innerHTML
        const iconEl = panelDetallesExperiencia.querySelector('.details-icon');
        const titleEl = panelDetallesExperiencia.querySelector('h3');
        const subtitleEl = panelDetallesExperiencia.querySelector('.details-subtitle');
        const descriptionEl = panelDetallesExperiencia.querySelector('.details-description');
        const responsibilitiesUl = panelDetallesExperiencia.querySelector('.details-section:nth-child(1) ul');
        const achievementsUl = panelDetallesExperiencia.querySelector('.details-section:nth-child(2) ul');
        const skillsDiv = panelDetallesExperiencia.querySelector('.skills-tags');

        if (iconEl) iconEl.textContent = datos.icon;
        if (titleEl) titleEl.textContent = datos.company;
        if (subtitleEl) subtitleEl.textContent = `${datos.role} • ${datos.period}`;
        if (descriptionEl) descriptionEl.textContent = datos.description;
        if (responsibilitiesUl) responsibilitiesUl.innerHTML = datos.responsibilities.map(resp => `<li>${resp}</li>`).join('');
        if (achievementsUl) achievementsUl.innerHTML = datos.achievements.map(ach => `<li>${ach}</li>`).join('');
        if (skillsDiv) skillsDiv.innerHTML = datos.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');

        // Animación de entrada con efectos mejorados
        const animacionLineaTiempo = gsap.timeline();

        // Initial fade in
        animacionLineaTiempo.fromTo(panelDetallesExperiencia,
            { opacity: 0, y: 30, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
        );

        // Animate title with bounce effect
        animacionLineaTiempo.fromTo(panelDetallesExperiencia.querySelector('h3'),
            { opacity: 0, x: -20, rotation: -5 },
            { opacity: 1, x: 0, rotation: 0, duration: 0.3, ease: 'power2.out' },
            '-=0.2'
        );

        // Animate subtitle
        animacionLineaTiempo.fromTo(panelDetallesExperiencia.querySelector('.details-subtitle'),
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
            '-=0.2'
        );

        // Animate description
        animacionLineaTiempo.fromTo(panelDetallesExperiencia.querySelector('.details-description'),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
            '-=0.1'
        );

        // Animate sections with stagger
        const secciones = panelDetallesExperiencia.querySelectorAll('.details-section');
        animacionLineaTiempo.fromTo(secciones,
            { opacity: 0, x: -30, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 0.4, stagger: 0.15, ease: 'power2.out' },
            '-=0.2'
        );

        // Animate list items with stagger and bounce effect
        const elementosLista = panelDetallesExperiencia.querySelectorAll('li');
        animacionLineaTiempo.fromTo(elementosLista,
            { opacity: 0, x: -20, scale: 0.8 },
            { opacity: 1, x: 0, scale: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(1.3)' },
            '-=0.3'
        );

        // Animate skill tags with elastic effect
        const etiquetasHabilidades = panelDetallesExperiencia.querySelectorAll('.skill-tag');
        animacionLineaTiempo.fromTo(etiquetasHabilidades,
            { opacity: 0, scale: 0, rotation: -180 },
            { opacity: 1, scale: 1, rotation: 0, duration: 0.5, stagger: 0.1, ease: 'elastic.out(1, 0.3)' },
            '-=0.4'
        );

        // Add a subtle continuous animation to skill tags
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
    function ocultarPanelDetalles() {
        gsap.to(panelDetallesExperiencia, {
            opacity: 0,
            scale: 0.9,
            rotationY: 15,
            duration: 0.4,
            ease: 'back.in(1.2)',
            onComplete: () => {
                panelDetallesExperiencia.style.display = 'none';
            }
        });
    }

    // Add hover and click functionality to timeline items
    elementosLineaTiempo.forEach((item, index) => {
        const experienceKey = item.getAttribute('data-experience');

        // Make sure the item is clickable
        item.style.cursor = 'pointer';

        // Click functionality - makes item stay active
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Add click animation to the marker
            const marker = item.querySelector('.timeline-marker');
            gsap.to(marker, {
                scale: 1.2,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });

            // Remove selected state from all items
            elementosLineaTiempo.forEach(i => {
                i.classList.remove('selected', 'active');
            });

            // Add selected state to clicked item
            item.classList.add('selected', 'active');
            elementoActivo = item;

            // Show details and keep them visible
            experienceDetails.style.display = 'block';

            // Add entrance animation for the panel
            gsap.fromTo(experienceDetails,
                { opacity: 0, scale: 0.8, rotationY: -15 },
                { opacity: 1, scale: 1, rotationY: 0, duration: 0.5, ease: 'back.out(1.2)' }
            );

            actualizarPanelDetalles(experienceKey);
        });

        // Hover functionality - visual effect only
        item.addEventListener('mouseenter', () => {
            if (!elementoActivo || elementoActivo !== item) {
                // Add hover glow effect to marker
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

        item.addEventListener('mouseleave', () => {
            // Remove hover effect
            const marker = item.querySelector('.timeline-marker');
            if (!item.classList.contains('selected')) {
                gsap.to(marker, {
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }

            // Remove active class if not selected
            if (!item.classList.contains('selected')) {
                item.classList.remove('active');
            }

            // Hide panel only if no item is selected and no item is being hovered
            setTimeout(() => {
                if (!elementoActivo && !document.querySelector('.timeline-item:hover')) {
                    ocultarPanelDetalles();
                }
            }, 100);
        });
    });

    // Hide details when mouse leaves the entire timeline area (only if no item is selected)
    document.querySelector('.timeline').addEventListener('mouseleave', () => {
        if (!elementoActivo) {
            setTimeout(() => {
                if (!document.querySelector('.timeline-item:hover')) {
                    elementosLineaTiempo.forEach(i => i.classList.remove('active'));
                    ocultarPanelDetalles();
                }
            }, 100);
        }
    });

    // Initialize with first experience selected
    if (elementosLineaTiempo.length > 0) {
        const firstItem = elementosLineaTiempo[0];
        const firstExperienceKey = firstItem.getAttribute('data-experience');

        firstItem.classList.add('active', 'selected');
        elementoActivo = firstItem;
        experienceDetails.style.display = 'block';

        // Add spectacular entrance animation for first load
        gsap.set(experienceDetails, { opacity: 0, scale: 0.5, rotationY: -45 });
        gsap.to(experienceDetails, {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            onComplete: () => {
                actualizarPanelDetalles(firstExperienceKey);
            }
        });

        // Add entrance animation for timeline markers
        gsap.fromTo(elementosLineaTiempo,
            { opacity: 0, y: 50, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)', delay: 0.3 }
        );
    }

});

// Projects filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length || !projectCards.length) return;

    // Filter projects function
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

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter category
            const filterValue = this.getAttribute('data-filter');

            // Filter projects
            filterProjects(filterValue);
        });
    });

    // Initialize with 'all' filter active
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }

    // GSAP animations for project cards
    function animateProjectCards() {
        gsap.fromTo('.project-card',
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                delay: 0.2
            }
        );
    }

    // Animate filter buttons
    gsap.fromTo('.filter-btn',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, delay: 0.1 }
    );

    // Intersection Observer for projects section
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProjectCards();
                }
            });
        }, { threshold: 0.2 });

        observer.observe(projectsSection);
    }

    // Hover effects for project cards
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

    // Add click animation to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Tool card hover animations
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

    // Add scroll-based animations for software categories
    const softwareCategories = document.querySelectorAll('.software-category');
    const softwareObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.fromTo(entry.target, 
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
                );
            }
        });
    }, { threshold: 0.1 });

    softwareCategories.forEach(category => {
        softwareObserver.observe(category);
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});

// Fin del archivo script.js
// Este archivo contiene todas las funcionalidades interactivas del portafolio:
// - Sistema de hexágonos de habilidades con datos dinámicos
// - Línea de tiempo de experiencia laboral
// - Carrusel 3D de hobbies con navegación automática
// - Efectos de scroll y animaciones GSAP
// - Navbar responsiva con efectos de scroll
// Desarrollado por Alberto Cortés Palacios - Junior Developer