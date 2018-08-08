import { connect } from 'react-redux';
import Template from '../template';
import { fetchPage } from '../../../actions/page_actions';
import { selectPageFields } from '../../../reducers/selectors';
import styled from 'styled-components';

const StyledTemplate = styled.div`
    @media only screen and (min-width: 769px) {
        .field_item {
            display: flex;
            justify-content: space-between;

            .field_text {
                width: 30vw;
            }
        }

        .reverse {
            flex-direction: row-reverse;
        }



    }
`;

const mapStateToProps = (state) => {
    const page = state.pages['Splash'];
    const pageTitle = "";

    return ({
        StyledTemplate: StyledTemplate,
        fields: selectPageFields(state, page),
        loading: state.loading.pageLoading,
        errors: state.errors.pageLoading,
        page: page,
        pageName: "Splash",
        pageTitle: pageTitle
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPage: (pageName) => dispatch(fetchPage(pageName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);