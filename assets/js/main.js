/**
 * AMARRAYA.LAT - Interactive Script
 * High-performance UI logic, legal modal manager & Meta verification tools
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close when clicking nav items
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. Legal Modals Handler
  const modalOverlay = document.getElementById('legalModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.querySelectorAll('.close-modal');

  const legalTexts = {
    privacidad: {
      title: '<i class="fa-solid fa-shield-halved"></i> Política de Privacidad de AmarraYa',
      body: `
        <p><strong>Última actualización:</strong> Año 2026</p>
        <p>En <strong>AmarraYa</strong> (Razón Social: AmarraYa, NIT 901011272-2, Matrícula Mercantil 613326-21 de la Cámara de Comercio de Cali), con domicilio en CL 51 NORTE # 66 - 784 CS 85, Cali, Colombia, la privacidad y protección de los datos de nuestros clientes, proveedores y usuarios es una prioridad absoluta.</p>
        
        <h4>1. Información que recopilamos</h4>
        <p>Recopilamos la información estrictamente necesaria para la prestación de nuestros servicios de comercialización, cotización y despacho de sistemas de amarre, carga y seguridad:</p>
        <ul>
          <li>Datos de identificación personal o corporativa (Nombre, Razón Social, NIT o Cédula).</li>
          <li>Datos de contacto y ubicación (Dirección de entrega, Ciudad, Correo electrónico corporativo, Teléfono celular/WhatsApp).</li>
          <li>Información técnica y de navegación (Dirección IP aproximada, cookies técnicas para rendimiento y analítica agregada).</li>
        </ul>

        <h4>2. Finalidad del tratamiento de los datos</h4>
        <p>Los datos suministrados serán tratados exclusivamente para:</p>
        <ul>
          <li>Procesar cotizaciones, pedidos y entregas logísticas a nivel nacional.</li>
          <li>Emitir la facturación electrónica correspondiente bajo la normativa de la DIAN.</li>
          <li>Brindar soporte técnico y atención postventa personalizada mediante nuestros canales oficiales (soporte@amarraya.lat y (+57) 304 232 5600).</li>
          <li>Cumplir con las exigencias legales y regulatorias aplicables en la República de Colombia y lineamientos de transparencia de Meta Business.</li>
        </ul>

        <h4>3. Seguridad y Confidencialidad</h4>
        <p>AmarraYa no vende, alquila ni comparte su base de datos personales con terceros para fines comerciales o de spam. Implementamos estándares de seguridad cifrada SSL y buenas prácticas de protección digital.</p>
      `
    },
    terminos: {
      title: '<i class="fa-solid fa-file-contract"></i> Términos y Condiciones del Servicio',
      body: `
        <p><strong>Razón Social:</strong> AmarraYa | <strong>NIT:</strong> 901011272-2</p>
        <p>Bienvenido al portal web oficial de <strong>AmarraYa</strong> (dominio <code>amarraya.lat</code>). Al navegar, cotizar o adquirir productos a través de este sitio, usted acepta los siguientes términos y condiciones:</p>

        <h4>1. Capacidad Legal y Representación</h4>
        <p>AmarraYa es una persona jurídica debidamente registrada y activa ante la Cámara de Comercio de Cali con Matrícula 613326-21, facultada para la distribución y comercialización de productos industriales, amarres, cinchas y accesorios de seguridad.</p>

        <h4>2. Precios y Cotizaciones</h4>
        <p>Las cotizaciones emitidas a través de la web o WhatsApp son válidas por el periodo estipulado en la cotización formal. Todos los valores están sujetos al Impuesto al Valor Agregado (IVA) correspondiente según el régimen tributario colombiano.</p>

        <h4>3. Despachos y Envíos</h4>
        <p>Realizamos despachos desde la ciudad de Cali hacia las principales ciudades y municipios de Colombia a través de empresas transportadoras legalmente autorizadas. Los tiempos estimados de entrega varían entre 24 y 72 horas hábiles según destino.</p>

        <h4>4. Garantías de Producto</h4>
        <p>Todos nuestros productos cuentan con garantía directa de fábrica contra defectos de manufactura y cumplen con los coeficientes de seguridad especificados en sus fichas técnicas.</p>
      `
    },
    datos: {
      title: '<i class="fa-solid fa-user-lock"></i> Política de Tratamiento de Datos (Ley 1581)',
      body: `
        <p>De conformidad con la <strong>Ley Estatutaria 1581 de 2012</strong> y el Decreto Reglamentario 1377 de 2013 de la República de Colombia, <strong>AmarraYa</strong> adopta el presente Manual de Políticas para el tratamiento de datos personales.</p>

        <h4>Derechos del Titular de los Datos</h4>
        <p>Como titular de sus datos personales, usted tiene derecho a:</p>
        <ul>
          <li>Conocer, actualizar y rectificar sus datos personales frente a AmarraYa.</li>
          <li>Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
          <li>Ser informado respecto del uso que se le ha dado a sus datos.</li>
          <li>Revocar la autorización o solicitar la supresión del dato cuando no se respeten los principios legales.</li>
        </ul>

        <h4>Canal Oficial para Ejercicio de Derechos Habeas Data</h4>
        <p>Para formular consultas, peticiones, quejas o reclamos (PQR) relacionados con sus datos personales, puede escribir a:</p>
        <ul>
          <li><strong>Correo Oficial:</strong> soporte@amarraya.lat</li>
          <li><strong>Línea de Atención:</strong> (+57) 304 232 5600</li>
          <li><strong>Dirección:</strong> CL 51 NORTE # 66 - 784 CS 85, Cali - Valle, Colombia</li>
        </ul>
      `
    },
    cookies: {
      title: '<i class="fa-solid fa-cookie-bite"></i> Política de Cookies',
      body: `
        <p>El sitio web <strong>amarraya.lat</strong> utiliza cookies técnicas y analíticas básicas para garantizar la mejor experiencia de navegación y funcionalidad de la plataforma.</p>

        <h4>¿Qué cookies utilizamos?</h4>
        <ul>
          <li><strong>Cookies Esenciales:</strong> Necesarias para la navegación y carga rápida de la interfaz.</li>
          <li><strong>Cookies de Preferencias:</strong> Almacenan su consentimiento sobre el uso de cookies.</li>
          <li><strong>Cookies Analíticas:</strong> Nos permiten medir el tráfico de forma anónima para optimizar la velocidad y contenido.</li>
        </ul>
        <p>Usted puede configurar o deshabilitar las cookies en cualquier momento desde las preferencias de su navegador.</p>
      `
    }
  };

  // Open modal
  document.querySelectorAll('[data-legal-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.getAttribute('data-legal-modal');
      if (legalTexts[type]) {
        modalTitle.innerHTML = legalTexts[type].title;
        modalContent.innerHTML = legalTexts[type].body;
        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal
  const closeModal = () => {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  modalClose.forEach(btn => btn.addEventListener('click', closeModal));
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  // 5. Contact Form Simulation & WhatsApp Dispatch
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      const nombre = document.getElementById('nombre')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const telefono = document.getElementById('telefono')?.value || '';
      const mensaje = document.getElementById('mensaje')?.value || '';

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Procesando solicitud...';

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Mensaje Enviado con Éxito!';
        submitBtn.style.background = '#10b981';

        // Preparamos WhatsApp
        const waText = encodeURIComponent(
          `¡Hola AmarraYa! Mi nombre es ${nombre}. Vengo desde amarraya.lat y requiero cotización:\n\nEmail: ${email}\nTel: ${telefono}\nMensaje: ${mensaje}`
        );
        
        const openWa = confirm('¡Gracias por contactar a AmarraYa! ¿Deseas abrir WhatsApp con un asesor comercial ahora mismo?');
        if (openWa) {
          window.open(`https://wa.me/573042325600?text=${waText}`, '_blank');
        }

        setTimeout(() => {
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
        }, 3000);
      }, 900);
    });
  }

  // 6. Cookie Consent Banner
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookies = document.getElementById('acceptCookies');
  if (cookieBanner && acceptCookies) {
    const isAccepted = localStorage.getItem('amarraya_cookies_consent');
    if (!isAccepted) {
      setTimeout(() => {
        cookieBanner.classList.add('show');
      }, 1000);
    }

    acceptCookies.addEventListener('click', () => {
      localStorage.setItem('amarraya_cookies_consent', 'true');
      cookieBanner.classList.remove('show');
    });
  }
});
