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

BACKEND

## FALTA 
 - CREAR RUTA DE CONTACTO
 - CREAR RUTA DE COTIZACION
 - MANTENER FUNCIONANDO
 - DEJAR SERVER.JS CON LAS RUTAS IMPORTADAS Y LIMPIO
 - AGREGAR UNA RUTA PRINCIPAL
 - CONECTAR LA PAGINA DE VENTAS DEL FRONT
 - VERIFICAR ERRORES DE LA PAGINA PRINCIPAL
 - CREAR CONTROLLERS PARA PRODUCTOS, CONTACTO, ETC
 - CREAR ARCHIVOS DE ALMACENAMIENTO
 - CREAR RUTAS PARA ENDPOINTS
 - ACTUALIZAR COMPONENTES DE VENTAS
 - ASEGURAR FILTRADO Y ORDEN DE PRODUCTOS
 