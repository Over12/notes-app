import { IconProps } from '@tabler/icons-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export type IconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
