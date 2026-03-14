import '../components/createCatEmptyState';
import '../data/defaults';
import '../utils/randomItem';
import '../utils/setCatTitle';
import '../utils/setCatImage';
import '../utils/findAndReplaceEmptyState';

declare module '*.svg' {
  const content: string;
  export default content;
}
