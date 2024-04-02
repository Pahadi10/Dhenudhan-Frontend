export const PAGE_HEADER_DATA = [
    
];

export const subcategoryUrl = (currentPage,category) => `https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&page=${currentPage}&search=type.slug:${category}%3Bstatus:publish`

export const NO_RESULT_IMAGE = 'https://pickbazar-react-rest.vercel.app/_next/static/media/no-result.b574bcc9.svg'
