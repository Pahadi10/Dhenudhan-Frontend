import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer({ subcategories, setSelectedSubcategory, open, setOpen, toggleDrawer}) {

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 220 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {subcategories.map((subcategory) => (
              <div key={subcategory.id}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => setSelectedSubcategory(subcategory.id)}>
                    <ListItemText primary={subcategory.name} />
                  </ListItemButton>
                </ListItem>
                {subcategory.children && subcategory.children.length > 0 && (
                  <List>
                    {subcategory.children.map((child) => (
                      <ListItem key={child.id} disablePadding>
                        <ListItemButton onClick={() => setSelectedSubcategory(child.id)}>
                          <ListItemText primary={child.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                )}
              </div>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
