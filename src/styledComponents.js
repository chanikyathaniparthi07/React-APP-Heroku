import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

const COURSES = [
    {
        id: "1", 
        title: "react", 
        url: "https://www.reactjs.com"
    }, 
    {
        id: "2", 
        title: "Firebase", 
        url: "https://www.firebase.com"
    }, 
    {
        id: "3", 
        title: "GraphQl", 
        url: "https://www.graphql.com"
    }, 
    {
        id: "4", 
        title: "Redux", 
        url: "https://www.redux.com"
    }
];

// applying the filter to search term in searching
const applyFilter = searchTerm => article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase());

// applying the styles to AppWrapper using StyledComponents
//here styled have many components like h1 div paragraph tags for now we used div from that
const AppWrapper = styled.div`
    margin: 20px
`;

// applying the styles to searchWrapper using StyledComponents
const SearchWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

// applying the styles to myInput using StyledComponents
const MyInput = styled.input`
    padding: 5px;
`;

// creating the functionality for  search by taking the properties of value, onSearch and childern
const Search = ({value, onSearch, children}) => (
    <SearchWrapper>
        {children} <br />
        <MyInput value={value} onChange={onSearch} type="text" />
    </SearchWrapper>
);

// applying the styles to list
const List = styled.ul`
    margin: 0,  
    padding: 0, 
    list-style-type: none
`;

// applying styles to listItem
const ListItem = styled.li`
    paddng: 10px 0, 
    borer-bottom: 1px solid grey
`;

// write the definition of courses
const Courses = ({courses}) => (
    <List>
        {courses.map(article => (
            <ListItem key={article.id} className="list-group">
                <Article article={article} />
            </ListItem>
        ))}
    </List>
);

// write Article functionality
const Article = ({article}) => (
    <MyLink href={article.url} className="list-group-item">{article.title}</MyLink>
);

// applying the styles to MyLink
const MyLink = styled.a`
    text-decoration: none;
`;

const StyledComponents = () => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    }

    return(
        <div className="container wrapper">
            { /* header */ }
            <Header />

            { /* main container */ }
            <div className="row">
                { /* left panel */}
                <LeftPanel /> 
          
                { /* center panel */ }
                { /* <Container /> */ }
                <div className="col-sm-6">
                    <div className="contentCenter">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Styled Components</h1>

                                <AppWrapper>
                                    <Search  onSearch={handleSearch}>
                                        <p className="text-primary">search for..,</p>
                                    </Search>

                                    <Courses courses={COURSES.filter(applyFilter(searchTerm))} />
                                </AppWrapper>
                            </div>
                        </div>
                    </div>
                </div>

                { /* rightpanel */}
                <RightPanel />
            </div>

            { /* footer */ }
            <Footer />
        </div>
    );
}


export default StyledComponents;