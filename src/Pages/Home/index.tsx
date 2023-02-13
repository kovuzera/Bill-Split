import Header from "../../components/Header";
import { IntegrantAvatar } from "../../components/IntegrantAvatar";
import { AvatarArea, Container } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <h2>Integrantes:</h2>
        <AvatarArea>
          <IntegrantAvatar />
        </AvatarArea>
      </Container>
    </>
  );
}
