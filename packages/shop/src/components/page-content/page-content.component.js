import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Grid } from '@mui/material';
import Skeleton from '@lib/components/shared/skeleton/skeleton.component'; // Import your Skeleton component
import Subcategory from '_components/subcategory-selection/subcategory.component';
import ProductCard from '_components/product-card/product-card.component';
import pageHeader from '~src/jsons/banner.json';
import { styles } from './page-content.styles';
import ImageSlider from '_components/image-slider/image-slider.component';
import { subcategoryUrl, NO_RESULT_IMAGE } from './page-content.constants';

const PageContent = (props) => {
    const { pageId, category } = props;

    const bannerData = pageHeader?.data.find(item => item.id === pageId);
    const { title, description: desc, image: { original: bannerImage }, promotional_sliders: promotionalBanners } = bannerData?.banners[0];
    console.log(promotionalBanners)
    const [mainCategoryData, setMainCategoryData] = useState([]);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [filteredSubcategoryData, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State to manage cards loading state

    useEffect(() => {
        async function fetchAllParentProducts() {
            try {
                let allData = [];
                let currentPage = 1;
                let hasMore = true;

                while (hasMore) {
                    const url = subcategoryUrl(currentPage, category)
                    const response = await axios.get(url);
                    const newData = response.data.data;

                    if (newData.length === 0) {
                        hasMore = false;
                    } else {
                        allData = [...allData, ...newData];
                        currentPage++;
                    }
                }

                setMainCategoryData(allData);
                setIsLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                console.error('Error fetching parent products:', error);
            }
        }

        fetchAllParentProducts();
    }, [category]);

    console.log({ mainCategoryData })

    useEffect(() => {
        if (selectedSubcategory !== null) {
            const filtered = mainCategoryData.filter(product => product.categories && product.categories.some(category => category.id === selectedSubcategory));
            setFilteredProducts(filtered);
        } else {
            // If no subcategory is selected, render parent data
            setFilteredProducts(mainCategoryData.slice(0, 30)); // Display only the first 30 items
        }
    }, [selectedSubcategory, mainCategoryData]);

    const handleLoadMore = () => {
        // setParentPageNumber(prevPageNumber => prevPageNumber + 1);
    };

    return (
        <Box style={styles.root}>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                <Box style={styles.bannrTextBox}>
                    <Box style={styles.title}>{title}</Box>
                    <Box style={styles.desc}>{desc}</Box>
                </Box>
                <img alt="Banner Image" src={bannerImage} style={styles.bannerImage} />
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'block', } }}>
                {promotionalBanners && <ImageSlider banners={promotionalBanners} />}
            </Box>

            <Grid container spacing={2} style={{ marginTop: 4 }}>
                <Grid item xs={12} lg={2}>
                    <Subcategory setSelectedSubcategory={setSelectedSubcategory} category={category} />
                </Grid>
                <Grid item xs={12} lg={10}>
                    <Grid container spacing={1}>
                        {isLoading ? (
                            <Grid container spacing={2}>
                                {[...Array(30)].map((_, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <Skeleton variant="rectangular" height={250} />
                                    </Grid>
                                ))}
                            </Grid>
                        ) : (
                            filteredSubcategoryData.length === 0 ? (
                                <Grid item xs={12} >
                                    <Box style={styles.noDataContainer}>
                                        <img src={NO_RESULT_IMAGE} style={styles.noDataImage} alt="No Result" />
                                        <Box style={styles.noDataText}>Sorry, No Product Found :(</Box>
                                    </Box>
                                </Grid>
                            ) : (
                                filteredSubcategoryData.map(product => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                        <ProductCard
                                            productThumbnail={product.image.original}
                                            name={product.name}
                                            weight={product.unit}
                                            price={product.price}
                                            salePrice={product.sale_price}
                                            desc={product.description}
                                            quantity={product.quantity}
                                            inStock={product.in_stock}
                                            gallery={product.gallery}
                                            ratings={product.ratings}
                                        />
                                    </Grid>
                                ))
                            )
                        )}
                    </Grid>
                </Grid>
            </Grid>

            {hasMoreData && filteredSubcategoryData.length !== 0 && (
                <Box style={styles.loadMoreButtonContainer}>
                    <Button variant='contained' onClick={handleLoadMore}>Load More</Button>
                </Box>
            )}
        </Box>
    );
};

export default PageContent;
