EMPRESA

Fuente: Poppins
Color del título: #9B1022
Tamaño del título: text-[28px] → 28px
Estilo del título: font-poppins font-semibold uppercase tracking-[0.18em]
Color del subtítulo: text-theme-muted
en tema claro: #474E45
en tema oscuro: #77817B
Tamaño del subtítulo: text-[12px]
Tracking del subtítulo: tracking-[0.18em]


PÁGINA PRINCIPAL (index.html)

La página tiene estos componentes:

- BarraNavegacion 
    - Inicio --> Portada
    - Nosotros --> Quienes somos
    - Servicios --> Servicios
    - Productos --> Productos
    - Proveedores --> proveedores
    - Equipo --> Equipo
    - Contacto --> Contacto
- Contacto --> Informacion para contactar a la empresa
- Equipo --> Imagenes y descripcion del equipo
- FormularioContacto --> Pide
    - Nombre completo
    - Correo electronico
    - Mensaje
    - boton enviar mensaje
- PiePagina
    - Empresa
        - Quienes somos
        - Nuestros servicios
        - Nuestro equipo
        - Casos de exito
    - Contacto
        - Email
        - Telefono
        - Ciudad
    - Legal
        - Terminos y condiciones
        - Politica de privacidad
        - cookies
        - Aviso de privacidad
    - Redes sociales y derechos reservados
- Portada --> Primera parte de la pagina
- Productos --> lleva a pagina de ventas.html
- proveedores --> Imagenes de proveedores >src>assets
- QuienesSomos --> Mision, Vision
- Servicios --> Servicios a realizar


PÁGINA DE VENTAS (ventas.html)

Catálogo de productos profesionales tipo SoloTodo.cl.

Componentes:

- NavegacionVentas
    - Titulo "CATALOGO"
    - Subtitulo "Productos y Soluciones"
    - Categorias:
        - Inicio (todos los productos)
        - Hardware
        - Software
        - Licencias
        - Periféricos
        - Tecnología
    - Botón alternar tema (Claro/Oscuro)

- CatalogoProductos
    - Sistema de filtros laterales (responsiva):
        - Por categoría (6 opciones)
        - Por rango de precio (slider 0-5000)
        - Por marca (checkboxes)
        - Botón limpiar todos los filtros
    - Opciones de orden:
        - Más Populares
        - Recomendados
        - Menor Precio
        - Mayor Precio
    - Grid responsiva:
        - 2 columnas en móvil
        - 3 columnas en tablet
        - 4 columnas en desktop
    - Contador de productos encontrados

- TarjetaProducto
    - Icono/placeholder del producto
    - Nombre del producto
    - Marca (badge)
    - Categoría
    - Características principales (max 3 mostradas)
    - Evaluación de popularidad (estrellas 1-10)
    - Badge "Recomendado" (si aplica)
    - Precio destacado en #9B1022
    - Botón "Cotizar"

- FormularioContacto (actualizado)
    - Modo contacto regular
    - Modo cotización con datos del producto:
        - Nombre del producto
        - Precio
        - Marca
        - Categoría
    - Campos:
        - Nombre completo
        - Correo electrónico
        - Mensaje (auto-rellenado si es cotización)
    - Botones: "Solicitar Cotización" / "Enviar mensaje" y "Cancelar"

- PiePagina --> Mismo footer que página principal
- Botón flotante de Contacto (📞) --> Abre formulario

PRODUCTOS DISPONIBLES (20 total)

Hardware (4):
- Monitor UltraWide 34" | LG | $580 | 9/10 | Recomendado
- PC Gamer RGB | ASUS | $1200 | 8/10 | Recomendado
- Laptop ThinkPad T14 | Lenovo | $950 | 7/10
- Servidor HP ProLiant | HP | $3500 | 6/10 | Recomendado

Software (4):
- Microsoft Office 365 | Microsoft | $69 | 10/10 | Recomendado
- Adobe Creative Cloud | Adobe | $79 | 9/10
- JetBrains IntelliJ IDEA | JetBrains | $199 | 8/10
- AutoCAD 2024 | Autodesk | $580 | 7/10

Licencias (4):
- Windows 11 Pro | Microsoft | $199 | 10/10 | Recomendado
- Kaspersky Total Security | Kaspersky | $89 | 8/10
- SAP Business One | SAP | $2000 | 7/10 | Recomendado
- VMware vSphere | VMware | $1500 | 6/10

Periféricos (4):
- Teclado Mecánico RGB | Corsair | $149 | 9/10 | Recomendado
- Mouse Logitech MX Master | Logitech | $99 | 8/10
- Webcam Logitech 4K | Logitech | $199 | 7/10
- Hub USB-C 7 en 1 | Anker | $79 | 6/10

Tecnología (4):
- Dispositivo Firewall Cisco | Cisco | $1800 | 8/10 | Recomendado
- Switch PoE 48 Puertos | Netgear | $950 | 7/10
- Router Wi-Fi 6E | ASUS | $350 | 9/10
- NAS 8 Bahías Synology | Synology | $1200 | 8/10