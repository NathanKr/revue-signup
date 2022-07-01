import { Button, Stack, TextField } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Email list signup form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1> Nathan Krasney רישום לרשימת התפוצה של</h1>
        <div>
          <h3>רישום לרשימת התפוצה שלי יאפשר לי לשלוח לכם פוסטים , מאמרים וסרטונים בנושאים הבאים</h3>
          <ul>
            <p>React : state management , mui 5, ...</p>
            <p>Typescript</p>
            <p>Next.js</p>
            <p>Jest</p>
          </ul>

          <form
            action="https://www.getrevue.co/profile/natankrasney/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
          >
            <Stack spacing={2}>
              <TextField
                label="Email address"
                type="email"
                name="member[email]"
                id="member_email"
                required
              />
              <TextField
                label="First name... (Optional)"
                type="text"
                name="member[first_name]"
                id="member_first_name"
              />
              <TextField
                label="Last name... (Optional)"
                type="text"
                name="member[last_name]"
                id="member_last_name"
              />
              <Button type="submit" variant="contained" size="large">
                Subscribe
              </Button>
              <div className="revue-form-footer">
                By subscribing, you agree with Revue’s{" "}
                <a target="_blank" href="https://www.getrevue.co/terms">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a target="_blank" href="https://www.getrevue.co/privacy">
                  Privacy Policy
                </a>
                .
              </div>
            </Stack>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
