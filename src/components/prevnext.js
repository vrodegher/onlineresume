import React from 'react'
const PrevNext = (props) => {

    const { prev, next } = props

    return (
        

        <ul className="prevNext">
            {prev && <li className="button">
            <a href={prev.fields.slug}>
                 {" "}
                {prev.frontmatter.title}</a></li>}
            {next && <li className="button"><a href={next.fields.slug}>
                  {" "} {next.frontmatter.title}

            </a></li>}
        </ul>
        
    )
}

export default PrevNext;
