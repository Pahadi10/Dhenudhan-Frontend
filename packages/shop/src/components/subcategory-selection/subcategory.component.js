import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDownIcon from '@lib/assets/svgs/angle-down-very-small.svg';
import axios from 'axios';
import SearchComponent from '@lib/components/shared/search/search.component';
import { styles } from './subcategory.styles';
import { subcategoryUrl } from './subcategory.constants';
import Navigation from '@lib/components/shared/navigation/navigation.component';
import TemporaryDrawer from '../drawer/drawer.component'

const Subcategory = ({ setSelectedSubcategory, category }) => {

    const subUrl = subcategoryUrl(category);
    const [openSubcategories, setOpenSubcategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenSubcategory = (id) => {
        setSelectedSubcategory(id);
        setOpenSubcategories(prevOpenSubcategories => (
            prevOpenSubcategories.includes(id) ?
            prevOpenSubcategories.filter(subId => subId !== id) :
            [...prevOpenSubcategories, id]
        ));
    };

    const handleSubcategorySelection = (id) => {
        setSelectedSubcategory(id);
    };

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(subUrl);
                setSubcategories(response.data.data); 
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <Box style={styles.root}>
            <Box sx={{ display: { sm: 'block', lg: 'none' } }}>
                <Box style={styles.subCategoryMenuIcon}>
                    <IconButton onClick = {toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <SearchComponent />
                </Box>
            </Box>

            {/* Replace Modal with TemporaryDrawer */}
            <TemporaryDrawer subcategories={subcategories} setSelectedSubcategory={setSelectedSubcategory} open = {open} setOpen = {setOpen} toggleDrawer = {toggleDrawer} />

            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                {subcategories && subcategories.length > 0 ? (
                    subcategories.map(item => {
                        const isOpen = openSubcategories.includes(item.id);
                        return (
                            <Box key={item.id}>
                                <Box style={styles.subcategoryContainer} onClick={() => handleOpenSubcategory(item.id)}>
                                    <Box style={styles.subcategoryName}>{item.name}</Box>
                                    <Box style={styles.arrowIconContainer}>
                                        {item.children.length > 0 && <ArrowDownIcon style={styles.arrowIcon} />}
                                    </Box>
                                </Box>
                                {isOpen && item.children && item.children.length > 0 && item.children.map(child => (
                                    <Box key={child.id}>
                                        <Box style={styles.subcategoryName} onClick={() => handleSubcategorySelection(child.id)}>{child.name}</Box>
                                    </Box>
                                ))}
                            </Box>
                        );
                    })
                ) : (
                    <Box>Loading..</Box>
                )}
            </Box>
        </Box>
    );
};

export default Subcategory;
