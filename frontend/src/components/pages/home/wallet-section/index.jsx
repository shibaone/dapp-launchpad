import ConnectButton from "@/components/common/connect-btn";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export default function WalletSection() {

    return (
        <div className={styles.connectWallet}>
            {/** Logo */}
            <Link className="flex gap-2 items-center" href="/">
                <Image
                  width={32}
                  height={32}
                  src="/shib-logo.svg"
                  alt="shib-logo"
                />
                <Image
                  width={98}
                  height={30}
                  src="/shibdev-logo-text.svg"
                  alt="shib-logo"
                />
              </Link>
            {/** Heading */}
            <div className={styles.heading}>
                {/** Indicator */}
                <div className={styles.indicator}></div>

                {/** Text */}
                <h1 className={styles.text}>Your local server is running</h1>
            </div>

            {/** Sub heading */}
            <h2 className={styles.subheading}>Connect wallet to test functionalities</h2>

            {/** Connect button */}
            <div className={styles.btnContainer}>
                <ConnectButton />
            </div>
        </div>
    )
}