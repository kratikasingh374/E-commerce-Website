import styles from "./Navbar.module.css";
import { Search, Menu, X, User, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      
      {/* LOGO */}
      <div className={styles.logo}>
        <div className={styles.logoImage}>
          <img
            src="https://previews.123rf.com/images/dahlangraphic/dahlangraphic1911/dahlangraphic191100303/133838633-infinity-logo-design-inspiration-vector-illustration-template.jpg"
            alt="logo"
            className={styles.imageofLogo}
          />
        </div>
        <p className={styles.logoName}>Infinity</p>
      </div>

      {/* MAIN */}
      <div className={styles.main}>

        {/* SEARCH */}
        <div className={styles.searchSection}>
          <input
            type="text"
            placeholder="Search products..."
            className={styles.searchBar}
          />
          <button className={styles.searchButton}>
            <Search size={18} strokeWidth={3} />
          </button>
        </div>

        {/* MENU ICON */}
        <div
          className={styles.menuIcon}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* LINKS */}
        <ul className={`${styles.links} ${open ? styles.showMenu : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/categories">Categories</a></li>

          {/* Mobile only links */}
          <li className={styles.mobileLink}><a href="#">Profile</a></li>
          <li className={styles.mobileLink}><a href="#">Wishlist</a></li>
          <li className={styles.mobileLink}><a href="#">Cart</a></li>
        </ul>

        {/* ICON SECTION (Desktop only) */}
        <div className={styles.iconSection}>
          <div className={styles.iconBox}>
            <User size={22} />
            <span>Profile</span>
          </div>

          <div className={styles.iconBox}>
            <Heart size={22} />
            <span>Wishlist</span>
          </div>

          <div className={styles.iconBox}>
            <ShoppingCart size={22} />
            <span>Cart</span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;