import styled from 'styled-components'

export const HeroAnimation = styled.div`
  width: 250px;
  height: 250px;
  background: #f1f1f1;
  border-radius: 50%;
  margin: 0 auto;
  transition: 0.5s ease-in;

  ${
      ({ hovered } : { hovered: string }) => {
        if ( hovered == 'portfolio') {
            return (
                `
                    transition: 0.3s ease-in;
                    box-shadow: 14px 14px 25px rgba(120, 120, 120, 0.10), -14px -14px 35px rgba(252, 252, 252, 0.7);
                ` 
            )
        }

        if ( hovered == 'about') {
            return (
                `   
                    border-radius: 2px;
                    transition: 0.3s ease-in;
                    box-shadow: 14px 14px 25px rgba(120, 120, 120, 0.10), -14px -14px 35px rgba(252, 252, 252, 0.7);
                ` 
            )
        }

        if ( hovered == 'blog') {
            return (
                `   
                    border-radius: 2px;
                    transition: 0.3s ease-in;
                    transform: rotate(45deg);
                    box-shadow: 14px 14px 25px rgba(120, 120, 120, 0.10), -14px -14px 35px rgba(252, 252, 252, 0.7);
                ` 
            )
        }

        if ( hovered == 'contact') {
            return (
                `   
                    transition: 0.3s ease-in;
                    box-shadow: 14px 14px 25px rgba(120, 120, 120, 0.10), -14px -14px 35px rgba(252, 252, 252, 0.7);
                ` 
            )
        }

        return `` 
    }
   }
`

export const Inner = styled.div`
  background: #f1f1f1;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  transition: 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  ${
    ({ hovered } : { hovered: string }) => {
        if ( hovered == 'contact') {
            return (
                `   
                    transition: 0.3s ease-in;
                    box-shadow: inset -10px -10px 20px rgba(255, 255, 255, 0.5), inset 10px 10px 20px rgba(120, 120, 120, 0.1);
                ` 
            )
        }
    }
   }
`