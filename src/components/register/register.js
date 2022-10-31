import {
  TextInput,
  PasswordInput,
  Select,
  Container,
  Button,
  Center,
  ActionIcon,
  Checkbox,
} from '@mantine/core';
import {  useRef, useState} from 'react';
import toast from 'react-hot-toast';
import { ArrowLeft, ChevronRight, Lock, UserCircle } from 'tabler-icons-react';
import { useAuth } from '../../contexts/AuthContext';
import { FooterPage } from '../layout/footer/footer';
import styles from "./register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [name, setName] = useState("");
  const [clients, setClients] = useState("");
  const [info, setInfo] = useState("Personal details");
  const [step, setStep] = useState(0);

  const { register } = useAuth();

  const handleStep = (step, title) => {
    setInfo(title);
    setStep(step);
  }
  
  const submitDetails = async () => {
    try {
      const body = {
        username: email,
        password: password,
        phonenumber: phonenumber,
      }
      await register(body);
      toast.success("Your account has been created.");
    } catch(error){
      toast.error(error.message);
    }
  }

  return (
    <>
    <Container size={600} my={40}>
    <h1 className={styles.title}>Create account</h1>
    <p className={styles.subtitle}>
            {info}
          </p>
      <TextInput value={email} onChange={(e) => {setEmail(e.currentTarget.value)}} label="Email" required />
      <TextInput value={phonenumber} onChange={(e) => {setPhonenumber(e.currentTarget.value)}} label="Phone Number" placeholder="" mt="md" required />
    <PasswordInput value={password} onChange={(e) => {setPassword(e.currentTarget.value)}} label="Password" required mt="md" />
    <Checkbox label="I agree to terms and conditions" required mt="md" />
    <Button onClick={() => {submitDetails()}} mt="lg">Register Account</Button>

</Container>
</>
  );
};

export default Register;
