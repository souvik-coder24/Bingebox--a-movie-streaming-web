import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Subscription.module.css';

const Subscription = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.title}>Your Subscription</p>
          <p className={styles.description}>
            Choose the best plan that fits your needs and enjoy unlimited movie streaming.
          </p>

          <div className={styles.toggleButtons}>
            <button className={styles.toggleButton}>Monthly</button>
            <button className={styles.toggleButton}>Annual</button>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.badge}>Starter</span>
              </div>
              <div>
                <p className={styles.planTitle}>Trial</p>
                <p className={styles.planPrice}>Free</p>
              </div>
              <div className={styles.planFeatures}>
                <p>5 Credits</p>
                <p>1 User</p>
                <p>Basic Features</p>
              </div>
              <button className={styles.actionButton}>Downgrade +</button>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.badge}>Value</span>
              </div>
              <div>
                <p className={styles.planTitle}>Fast Start</p>
                <p className={styles.planPrice}>₹2,000</p>
              </div>
              <div className={styles.planFeatures}>
                <p>50 Credits per month</p>
                <p>Unlimited Users</p>
                <p>Advanced Features</p>
              </div>
              <button className={styles.actionButton}>Current Plan</button>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.badge}>Pro</span>
              </div>
              <div>
                <p className={styles.planTitle}>Accelerate</p>
                <p className={styles.planPrice}>₹5,000</p>
              </div>
              <div className={styles.planFeatures}>
                <p>100 Credits per month</p>
                <p>Unlimited Users</p>
                <p>Premium Features</p>
              </div>
              <button className={styles.actionButton}>Upgrade +</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;