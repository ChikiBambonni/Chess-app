import { AnalysisModule } from './analysis.module';

describe('AnalysisModule', () => {
  let analysisModule: AnalysisModule;

  beforeEach(() => {
    analysisModule = new AnalysisModule();
  });

  it('should create an instance', () => {
    expect(analysisModule).toBeTruthy();
  });
});
