import { useLocation } from 'react-router-dom';

function AnalysisResult() {
  const location = useLocation();
  const { checkListId } = location.state;

  return <div>AnalysisResult</div>;
}

export default AnalysisResult;
