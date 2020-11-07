import React from "react"
import SkillCard from "../SkillCard"
import * as styled from "./styled"

interface IProps {
  title: string
  description: string
  url: string
}

export default function ProjectCard({ title, description, url }: IProps) {
  return (
    <div>
      <SkillCard title={title} description={description} />
      <styled.LinkButton href={url} target="_blank" rel="noopener noreferrer">
        View
      </styled.LinkButton>
    </div>
  )
}
