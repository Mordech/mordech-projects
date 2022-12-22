import prettier, {
  BuiltInParserName,
  CustomParser,
  LiteralUnion,
} from 'prettier';

interface FormatOptions {
  input: string;
  parser: LiteralUnion<BuiltInParserName> | CustomParser;
}
export function formatOutput({ input, parser }: FormatOptions): string {
  const prettierConfig = prettier.resolveConfig.sync(process.cwd()) || {};
  return prettier.format(input, { parser: parser, ...prettierConfig });
}
