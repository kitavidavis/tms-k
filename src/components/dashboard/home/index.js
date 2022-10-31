import { ColorSwatch, Text, Group, Paper, SimpleGrid, Anchor, Title as MantineTitle, useMantineColorScheme, useMantineTheme, ActionIcon} from '@mantine/core';
import { useLocalStorage, useViewportSize } from '@mantine/hooks';
import { BreadcrumbsSlash } from "../../BreadCrumbs/";
import { AuthContext } from '../../../App';
import { useContext } from 'react';
import { AlertCircle, X } from 'tabler-icons-react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import Statistics from './Statistics';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};


function HomePage() {
  const theme2 = useMantineColorScheme();
  const { state, dispatch } = useContext(AuthContext);
  const items = [
    { title: 'app', href: '/app/' },
    { title: 'Dashboard', href: '#' },
  ].map((item, index) => (
    <Anchor size="xs" href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  const theme = useMantineTheme()

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const barlabels = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

  const data = {
      labels,
      datasets: [
        {
          label: 'Settled',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 0 })),
          borderColor: theme.colors.green[8],
          backgroundColor: theme.colors.green[8],
        },
        {
          label: 'Pending',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 0 })),
          borderColor: "#003153",
          backgroundColor: "#003153",
        },
      ],
    };

    const data2 = {
      labels,
      datasets: [
        {
          label: 'Tenants',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 0 })),
          borderColor: theme.colors.green[8],
          backgroundColor: theme.colors.green[8],
        },
      ],
    };

  return (
    <>
    <Group mb={20} position='apart'>
      <Group position='left'>
      <MantineTitle order={4} weight={300}>Welcome, {state.userData.username}</MantineTitle>
      </Group>
      <Group position='right'>
        <BreadcrumbsSlash items={items} />
      </Group>
    </Group>

    <Statistics />
    <SimpleGrid
      cols={2}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 1, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      <Paper withBorder shadow="xs" p="md" >
        <Group mb={20} >
            <MantineTitle order={4}>Complaints</MantineTitle>
        </Group>
        <Group position='apart' mb={20}>
            <Group position='left'>
                <Text color="dimmed" >Settled vs Pending</Text>
            </Group>
            <Group spacing={5} position='right'>
                <Group spacing={3} >
                <ColorSwatch size={10} color={theme.colors.blue[8]} />
                <Text color="dimmed"  size='xs' >Settled</Text>
                </Group>
                <Group spacing={3} >
                <ColorSwatch size={10} color={theme.colors.green[8]} />
                <Text color="dimmed"  size='xs' >Pending</Text>
                </Group>
            </Group>
        </Group>

        <Line options={options} data={data} />
      </Paper>
      
      <Paper withBorder shadow="xs" p="md" >
      <Group mb={20} >
            <MantineTitle order={4}>Tenants</MantineTitle>
        </Group>

        <Bar options={options} data={data2} />
      </Paper>
    </SimpleGrid>
    </>
  )
}

export default HomePage;