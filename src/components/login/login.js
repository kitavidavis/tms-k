import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Container,
  Group,
  Button,
  Center,
  ActionIcon,
} from '@mantine/core';
import {  useContext, useState} from 'react';
import toast from 'react-hot-toast';
import { Lock } from 'tabler-icons-react';
import styles from "./login.module.css";
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';
import { AuthContext } from '../../App';
import { ACCOUNT_DATA, SESSION_DATA } from '../../constants';
import { useLocalStorage, useSessionStorage } from '@mantine/hooks';
import { FooterPage } from '../layout/footer/footer';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { state, dispatch } = useContext(AuthContext);

  const onSubmit = async () => {
    try {
      const body = {
        username: email,
        password: password
      };

      axios.post("/auth/login", body).then(({
        data: {
          data: accountData,
          token: accessToken
        },
      }) => {
        localStorage.setItem(SESSION_DATA, accessToken);
        dispatch({type: "SIGN_IN", token: accessToken, data: accountData});
      }).catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message || error.message)
      })
    } catch(error){
      console.log(error);
      toast.error(error?.response?.data?.message || error.message);
    }
  }

  return (
    <>
    <Container size={600} my={40}>
    <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>
            Sign in into your account
          </p>
    <Center mt={5} >
    <ActionIcon size="lg" radius={28} style={{backgroundColor: 'red', cursor: 'text'}} >
      <Lock color='white' />
    </ActionIcon>
    </Center>

    <TextInput value={email} onChange={(e) => {setEmail(e.currentTarget.value)}} label="Email" required />
    <PasswordInput value={password} onChange={(e) => {setPassword(e.currentTarget.value)}} label="Password" required mt="md" />
    <Group position="apart" mt="md">
      <Checkbox label="Remember me" />
      <Anchor component={Link} to="/account/forgot-password/" size="sm">
        Forgot password?
      </Anchor>
    </Group>
    <Button onClick={() => {onSubmit()}} fullWidth mt="xl">
      Login
    </Button>

</Container>
</>
  );
};

export default Login;
