# PayFy Readme
## Descripción del Proyecto
Esta aplicación permite a los usuarios:

- Visualizar su información personal y de sus servicios asociados.
- Seleccionar servicios específicos para pagar.
- Agregar y gestionar métodos de pago.
- Realizar pagos con confirmación y recibo descargable.
- Consultar el historial de pagos.
- Ponerse en contacto con soporte de la app via WhatsApp


El producto está diseñado para ser un MVP (Producto Mínimo Viable) con funcionalidades básicas que permitirán a los usuarios realizar operaciones esenciales.


 ## Tecnologías Utilizadas:
 
- **Frontend:** React Native
- **Backend:** Node.js
- **Base de Datos:** MongoDB
- **DevOps:** GitHub Actions
- **APIs:** Integración con servicios como Stripe, Mercado Pago y Prisma para procesamiento de pagos (approach hibrido para tomar lo mejor de cada proveedor)
- **Pruebas:** Manual QA para pruebas funcionales.

## 📅 Flujo Completo
1. Pantalla de Bienvenida con animación (splash screen)
2. Inicio de Sesión y registro en caso de ser usuario nuevo.
2.1. Registro con datos necesarios, confirmación via correo electrónico.
3. Inicio con correo y contraseña 
4. Dashboard Principal reflejando todos los servicios vigentes
5. Seleccionar Servicio → Detalle del Servicio -> Muestra nombre de la empresa, fecha de vencimiento y numero de cliente asociado a dicha empresa.
6. Botón para Pagar en la tarjeta de cada servicio
7. Pantalla para agregar Método de Pago -> Solicita medios de pago validos y datos (Tarjeta de crédito/débito con su respectivos 16 numeros, nombre del titular, fecha de expiracion y CVV.
8. Confirmación del Pago o Error (cuando el punto 6 se cumpla)
9. Historial de Pagos o Regreso al Dashboard
10. Pantalla para gestionar datos personales.
11. Pantalla para gestionar notificaciones.

## Objetivos del MVP
* Construir una app funcional en un plazo de 4 semanas.
* Permitir realizar pagos básicos de servicios varios y consultar historial.
* Una vez realizado el pago el dashboard debe actualizarse reflejando el pago del servicio en cuestión.
* Poder agregar diferentes medios de pagos exitosamente.
* Validar la viabilidad del producto con usuarios reales.
