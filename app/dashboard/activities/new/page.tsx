'use client'
import Icon from "@/app/components/Icon"
import { Box, Button, Container, DropdownMenu, Flex, Section, Text, TextField } from "@radix-ui/themes"

const CreateActivity = () => {

    return (
        <Section className="bg-white">
            <Container size="1">
                <h1>Create Activity</h1>
                <form action="">
                    <div className="mb-2">
                        <TextField.Input variant="soft" color="gray" placeholder="Activity name" />
                        <Text>Please enter an activity name</Text>
                    </div>
                    <div className="mb-2"><TextField.Input variant="soft" color="gray" placeholder="Description" /> </div>
                    <div className="mb-2"><TextField.Input variant="soft" color="gray" placeholder="Estimation" /> </div>
                    <div className='m-4'>
                        <span>Use the format: 2w 4d 6h 45m</span>
                        <ul className='mt-0'>
                            <li>w = weeks</li>
                            <li>d = days</li>
                            <li>h = hours</li>
                            <li>m = minutes</li>
                        </ul>
                    </div>
                    <Flex justify="between">
                        <Box>
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Button variant="soft">
                                        Add Project
                                        <Icon name="chevron-down" strokeWidth="2" size="16" />
                                    </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content>
                                    <DropdownMenu.Item>Share</DropdownMenu.Item>
                                    <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </Box>
                        <Box>
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Button variant="soft">
                                        Add Tags
                                        <Icon name="chevron-down" strokeWidth="2" size="16" />
                                    </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content>
                                    <DropdownMenu.Item>Share</DropdownMenu.Item>
                                    <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </Box>
                        <Box>
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Button variant="soft">
                                        Add Clients
                                        <Icon name="chevron-down" strokeWidth="2" size="16" />
                                    </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content>
                                    <DropdownMenu.Item>Share</DropdownMenu.Item>
                                    <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </Box>
                    </Flex>
                    <div className="my-4">
                        <Button type="submit" variant="soft">Create activity</Button>
                    </div>
                </form>
            </Container>
        </Section >
    )
}

export default CreateActivity
