import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Image
            src="/face.png"
            alt="logo"
            width={130}
            height={104}/>
        <h1>FROGGSTERNAUT</h1>
      </header>
      <div className={styles.line}></div>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>TOKENOMICS:</h1>
          <h2>*Total Supply of 1 Trillion tokens</h2>
          <h2>*Fair Launch</h2>
          <h3> - No Pre-sales</h3>
          <h3> - No Insider Allocations</h3>
          <h2>*No minting</h2>
          <h3> - Token can only be burned</h3>
          <div className={styles.glossyButton}>B U Y</div>
        </div>
        <Image className={styles.frog}
            src="/body2.png"
            alt="groggy"
            width={350}
            height={470}/>
      </main>
      <div className={styles.preseci}>
        <div className={styles.presek}></div>
        <div className={styles.presek2}></div>
      </div>

      <div className={styles.info}>
        <Image
          unoptimized
          src="/frog_jumping.gif"
          alt="x"
          width={95}
          height={95}/>
        <h1>A True Community Token</h1>
        <h2 className={styles.green}>$NAUT</h2>
        <div className={styles.mreze}>
          <Link href="https://x.com/froggsternaut">
            <Image
                  src="/x.png"
                  alt="x"
                  width={100}
                  height={100}/>
          </Link>
          <Link href="https://x.com/froggsternaut">
            <Image
                  src="/pump.png"
                  alt="pomp.fun"
                  width={95}
                  height={95}/>
          </Link>
          <Link href="https://t.me/+IQ0MAcrm2pxkZmY8">
            <Image
                  src="/Telegram.png"
                  alt="telegram"
                  width={90}
                  height={90}/>
          </Link>
          <Link href="https://www.youtube.com/@froggsternaut">
            <Image
                  src="/yt.png"
                  alt="yt"
                  width={115}
                  height={81}/>
          </Link>
        </div>
        <p>* * *</p>
        <p>Decentralized and fair-launched, but relies on the power of its community to leap to new heights and conquer the crypto galaxy together</p>
        <p>* *</p>
        <p>Airdrops for the holders every week on our X account</p>
        <p>*</p>
        <p>Together, to the moon!</p>
      </div>

      <div className={styles.line2}></div>
      
      <footer className={styles.footer}>
        <h1>$NAUT</h1>
      </footer>

      <Image className={styles.peepo}
        unoptimized
        src="/peepo-smile.gif"
        alt="logo"
        width={100}
        height={90}/>
    </>
  );
}
