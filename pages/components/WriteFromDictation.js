import React, { useState } from "react";
import styled from "styled-components";
import t from "prop-types";
import { Textarea, Text } from "theme-ui";
import { Button } from "theme-ui";

const Question = styled("li")`
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Transcript = styled("p")`
  margin: 0;
`;

const Audio = styled("audio")`
  display: block;
  margin-bottom: 8px;
  margin-top: 8px;
`;

const NewWord = styled("span")`
  margin: 0;
  font-style: italic;
  display: inline-block;
`;


const WriteFromDictation = ({ transcript, audio, times, level, newwords, id }) => {
  const [showTranscript, toggleShowHide] = useState(false);
  const [showAnswer, toggleShowAnswer]= useState(false);
  const [answer, changeAnswer] = useState('');
  const NewWords = newwords.map(w => {
    return <NewWord>{w}</NewWord>;
  });

  return (
    <Question key={id}>
      <Transcript>
        {showTranscript ? transcript : ""}&nbsp;
        <em>({times} times)</em>&nbsp;-&nbsp;
        {level && <strong>{level}</strong>}
        {showAnswer ? <Text sx={{color: "secondary"}}>{answer}</Text>: ""}
        {NewWords}
      </Transcript>
      <Button
        mt={2}
        ml={0}
        mb={2}
        mr={2}
        pt={2}
        pb={2}
        pl={3}
        pr={3}
        sx={{
          color: "text",
          bg: "highlight",
          fontSize: 2,
          border: 1,
          borderColor: "highlight",
          borderStyle: "solid",
          borderRadius: 4,
          fontWeight: "bold"
        }}
        onClick={() => toggleShowHide(!showTranscript)}
      >
        {showTranscript ? "Hide transcript" : "Show transcript"}
      </Button>
      <Audio controls>
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </Audio>
      <Textarea
        onChange={(event) => {
          changeAnswer(event.target.value)
        }}
        value={answer}
        placeholder="Write your answer here"
        rows={2}
        sx={{
          fontSize: 3,
          mb: 2,
          mt: 3
        }}
      />
      <Button
        m={0}
        mt={2}
        mb={2}
        pt={2}
        pb={2}
        pl={3}
        pr={3}
        sx={{
          color: "text",
          bg: "highlight",
          fontSize: 2,
          border: 1,
          borderColor: "highlight",
          borderStyle: "solid",
          borderRadius: 4,
          fontWeight: "bold"
        }}
        onClick={() => {
          toggleShowAnswer(!showAnswer)
          toggleShowHide(!showAnswer)
        }}
      >
        {showAnswer ? "Hide the comparation" : "Compare with transcript"}
      </Button>
    </Question>
  );
};

WriteFromDictation.propTypes = {
  transcript: t.string,
  audio: t.string,
  times: t.number,
  level: t.string,
  newwords: t.array,
  id: t.string
};

WriteFromDictation.defaultProps = { newwords: [] };

export default WriteFromDictation;
