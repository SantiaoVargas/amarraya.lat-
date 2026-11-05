# AmarraYa — Landing Page Oficial & Verificación Meta BM & Dominio

Landing page corporativa moderna para **AmarraYa** (`amarraya.lat`), optimizada con diseño visual de alto impacto (estética cósmica neón cian/naranja inspirada en su identidad gráfica) y **100% preparada para aprobar la Verificación de Negocio (Business Manager) y Verificación de Dominio en Meta (Facebook/Instagram)**.

---

## 📌 Datos Legales Verificados de la Empresa
Todos los datos de la web coinciden con exactitud con el **Certificado de Existencia y Representación Legal de la Cámara de Comercio de Cali**:

- **Razón Social:** AmarraYa
- **NIT:** 901011272-2
- **Matrícula Mercantil:** 613326-21 (Cámara de Comercio de Cali)
- **Fecha de Matrícula Inicial:** 4 de Septiembre de 2014
- **Último Año Renovado:** 2026
- **Domicilio Principal:** Cali - Valle del Cauca, Colombia
- **Dirección Judicial y Comercial:** CL 51 NORTE # 66 - 784 CS 85
- **Correo Electrónico Oficial:** soporte@amarraya.lat
- **Teléfono / WhatsApp Oficial:** (+57) 304 232 5600
- **Dominio Asociado:** `amarraya.lat`

---

## 🚀 Estructura del Proyecto

```
Amarayya/
├── index.html                 # Landing page principal interactiva
├── privacidad.html            # Política de Privacidad directa para Meta
├── terminos.html              # Términos y Condiciones de Uso y Venta
├── tratamiento-datos.html     # Política de Tratamiento de Datos (Ley 1581 de 2012)
├── CNAME                      # Configuración de dominio personalizado para GitHub Pages (amarraya.lat)
├── assets/
│   ├── css/
│   │   └── styles.css         # Estilos UI modernos, tema oscuro y efectos neon glow
│   ├── js/
│   │   └── main.js            # Lógica interactiva, modales legales y cookies
│   └── img/
│       ├── amarraya-logo.jpg          # Logo / Avatar cuadrado
│       └── amarraya-hero-banner.jpg   # Banner horizontal oficial
└── README.md
```

---

## 🛡️ Guía para Verificar el Dominio en Meta Business Manager

### Método 1: Meta-Tag HTML (Recomendado)
1. Ve a **Meta Business Suite / Configuración del Negocio** > **Seguridad de la marca** > **Dominios**.
2. Añade tu dominio `amarraya.lat`.
3. Selecciona la opción **"Agregar una metaetiqueta al código fuente HTML"**.
4. Copia el código que te proporciona Meta (ejemplo: `<meta name="facebook-domain-verification" content="abcdef123456..." />`).
5. Abre el archivo `index.html` (y los archivos `.html` de políticas) y en la línea 8 reemplaza:
   ```html
   <meta name="facebook-domain-verification" content="amarraya_meta_domain_verification_code" />
   ```
   por tu código real.
6. Haz commit y push a GitHub. Espera 1 minuto y haz clic en **"Verificar dominio"** en Meta.

### Método 2: Registro TXT en el DNS de tu dominio
En tu registrador (Cloudflare, Namecheap, GoDaddy, Hostinger, etc.):
- **Tipo:** `TXT`
- **Nombre / Host:** `@`
- **Valor:** El código `facebook-domain-verification=...` que te da Meta.

---

## 🌐 Configurar GitHub Pages con tu Dominio `amarraya.lat`

1. En tu repositorio de GitHub `https://github.com/SantiaoVargas/amarraya.lat-`:
   - Ve a **Settings** > **Pages**.
   - En **Build and deployment > Source**, selecciona **Deploy from a branch**.
   - Branch: selecciona **main** / root (`/`) y haz clic en **Save**.
   - En **Custom domain**, confirma que figure `amarraya.lat` y activa **Enforce HTTPS**.

2. En tu proveedor de DNS donde compraste el dominio `amarraya.lat`, agrega estos registros:

| Tipo | Nombre | Valor / Destino |
|------|--------|-----------------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |
| **CNAME** | `www` | `santiaovargas.github.io.` |

---

## 💼 Documentos Legales para la Verificación del Business Manager (BM)
Cuando Meta te solicite verificar los datos comerciales en **Información del Negocio**:
- Ingresa exactamente el Nombre Legal: **AmarraYa**
- Ingresa la dirección: **CL 51 NORTE # 66 - 784 CS 85, Cali, Valle del Cauca**
- Ingresa el teléfono: **3042325600** (código +57)
- Sube el PDF del **Certificado de Cámara de Comercio de Cali** adjunto.
- Para verificar el correo corporativo, selecciona el método por email a **soporte@amarraya.lat** o mediante el dominio verificado.
