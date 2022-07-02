import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h2>The QuoteDetail pages</h2>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>

        <Comments/>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
