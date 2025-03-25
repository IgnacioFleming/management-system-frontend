import styles from "./WellcomeSection.module.css";
function WellcomeSection() {
  return (
    <main className={styles.homeContainer}>
      <h1>Welcome to Business Manager</h1>
      <p className="text-500">Thank you for using our business management tool. This system will allow you to keep an efficient and detailed control of the different areas of your business. From here you can manage products, customers, current accounts, sales, payments and much more.</p>
      <h2>Main functions</h2>
      <ul>
        <li>
          <strong>Product Management:</strong> <span className="text-color-secondary text-lg">Add, edit and organize your product inventory to keep an accurate control of your stock.</span>
        </li>
        <li>
          <strong>Customer Management:</strong> <span className="text-color-secondary text-lg">Keep a record of all your customers, their contact information and purchase history.</span>
        </li>
        <li>
          <strong>Current Accounts:</strong> <span className="text-color-secondary text-lg">Manage your customers' accounts and keep track of outstanding balances.</span>
        </li>
        <li>
          <strong>Sales:</strong> <span className="text-color-secondary text-lg">Record all sales made, generating tickets and updating inventories automatically.</span>
        </li>
        <li>
          <strong>Payments:</strong> <span className="text-color-secondary text-lg">Control the payments received and keep an orderly accounting of income.</span>
        </li>
      </ul>
      <p className="text-500">We hope this tool makes managing your business easier and more effective!</p>
    </main>
  );
}

export default WellcomeSection;
