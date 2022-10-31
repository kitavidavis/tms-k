import { ColorSwatch, Text, Avatar, Group, Paper, SimpleGrid, Anchor, Title as MantineTitle, useMantineColorScheme, useMantineTheme, ActionIcon, TextInput, NumberInput, Switch, Button, Tooltip, Table, Center, Menu} from '@mantine/core';
import { useLocalStorage, useViewportSize } from '@mantine/hooks';
import { BreadcrumbsSlash } from "../BreadCrumbs/";
import { AuthContext } from '../../App';
import { useContext, useEffect, useState } from 'react';
import { AlertCircle, Dots, X } from 'tabler-icons-react';
import { IconFileExport, IconPlus } from '@tabler/icons';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from '../../utils/axios';

function PaymentsList() {
  const theme2 = useMantineColorScheme();
  const { state, dispatch } = useContext(AuthContext);
  const items = [
    { title: 'app', href: '/app/' },
    { title: 'Payments List', href: '#' },
  ].map((item, index) => (
    <Anchor size="xs" href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  const [properties, setProperties] = useState([]);


  const theme = useMantineTheme()
  return (
    <>
    <Group mb={20} position='apart'>
      <Group position='left'>
      <MantineTitle order={4} weight={300}>Payments List</MantineTitle>
      </Group>
      <Group position='right'>
        <BreadcrumbsSlash items={items} />
      </Group>
    </Group>

    <Paper shadow="sm" p="md">
        <Group spacing="lg" position='right'>
            <Tooltip label="Export data as CSV">
            <ActionIcon>
                <IconFileExport />
            </ActionIcon>
            </Tooltip>
            <Tooltip label="Add new Property" >
            <ActionIcon component={Link} to="/app/properties/add-property" >
                <IconPlus />
            </ActionIcon>
            </Tooltip>
        </Group>
    <Group position='apart'>
        <Group position='left'>
            <TextInput placeholder='Search' size='xs' radius={28} />
        </Group>
    </Group>

    <div style={{overflowX: 'auto'}} >
    <Table fontSize='xs' >
        <thead>
            <tr>
                <th>
                    #
                </th>
                <th>
                    Image
                </th>
                <th>
                    Name
                </th>
                <th>
                   Amount
                </th>
                <th>
                    For
                </th>
                <th>
                    Paid At
                </th>
                <th>
                    Transaction Status
                </th>
            </tr>
        </thead>
        <tbody>
            {properties.length === 0 ? (
                            <tr>
                            <td colSpan={7}>
                                <Center>
                                    <Text size="xs">No data is available</Text>
                                </Center>
                            </td>
                        </tr>
            ) : (
                properties.map((item, index) => {
                    return (
                        <tr>
                            <td>
                                {index+1}
                            </td>
                            <td>
                                <Avatar radius="xl" >H</Avatar>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.rooms}
                            </td>
                            <td>
                                {item.rooms}
                            </td>
                            <td>
                                0
                            </td>
                            <td>
                                <Menu>
                                    <Menu.Target>
                                        <ActionIcon>
                                            <Dots size={14} />
                                        </ActionIcon>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        <Menu.Item>Edit</Menu.Item>
                                        <Menu.Item >Delete</Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </td>
                        </tr>
                    )
                })
            )}
        </tbody>
    </Table>
    </div>
    </Paper>
    </>
  )
}

export default PaymentsList;