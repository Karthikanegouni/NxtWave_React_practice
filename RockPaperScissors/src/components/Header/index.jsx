import {Container, Heading, Text, ScoreCard, Score} from './styledComponents'

const Header = ({score}) => (
  <Container>
    <Heading>
      <span>ROCK</span>
      <span>PAPER</span>
      <span>SCISSORS</span>
    </Heading>
    <ScoreCard>
      <Text>Score</Text>
      <Score>{score}</Score>
    </ScoreCard>
  </Container>
)

export default Header
