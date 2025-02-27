import styles from "./WellcomeSection.module.css";
function WellcomeSection() {
  return (
    <main className={styles.homeContainer}>
      <h1>Bienvenido al Business Manager</h1>
      <p className="text-500">Gracias por utilizar nuestra herramienta de gestión empresarial. Este sistema te permitirá llevar un control eficiente y detallado de las distintas áreas de tu negocio. Desde aquí podrás gestionar productos, clientes, cuentas corrientes, ventas, pagos y mucho más.</p>
      <h2>Funciones principales</h2>
      <ul>
        <li>
          <strong>Gestión de Productos:</strong> <span className="text-color-secondary text-lg">Añade, edita y organiza tu inventario de productos para mantener un control preciso de tu stock.</span>
        </li>
        <li>
          <strong>Gestión de Clientes:</strong> <span className="text-color-secondary text-lg">Lleva un registro de todos tus clientes, sus datos de contacto e historial de compras.</span>
        </li>
        <li>
          <strong>Cuentas Corrientes:</strong> <span className="text-color-secondary text-lg">Administra las cuentas de tus clientes y mantén un seguimiento de los saldos pendientes.</span>
        </li>
        <li>
          <strong>Ventas:</strong> <span className="text-color-secondary text-lg">Registra todas las ventas realizadas, generando tickets y actualizando inventarios automáticamente.</span>
        </li>
        <li>
          <strong>Pagos:</strong> <span className="text-color-secondary text-lg">Controla los pagos recibidos y mantén una contabilidad ordenada de los ingresos.</span>
        </li>
      </ul>
      <p className="text-500">¡Esperamos que esta herramienta haga la administración de tu negocio más fácil y efectiva!</p>
    </main>
  );
}

export default WellcomeSection;
