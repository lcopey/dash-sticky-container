# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashstickycontainer

"""
    ''_dashstickycontainer(;kwargs...)
    ''_dashstickycontainer(children::Any;kwargs...)
    ''_dashstickycontainer(children_maker::Function;kwargs...)


A DashStickyContainer component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (Bool | Real | String | Dict | Array; optional)
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional)
- `title` (String; optional)
- `top` (String; optional)
"""
function ''_dashstickycontainer(; kwargs...)
        available_props = Symbol[:children, :id, :className, :title, :top]
        wild_props = Symbol[]
        return Component("''_dashstickycontainer", "DashStickyContainer", "dash_sticky_container", available_props, wild_props; kwargs...)
end

''_dashstickycontainer(children::Any; kwargs...) = ''_dashstickycontainer(;kwargs..., children = children)
''_dashstickycontainer(children_maker::Function; kwargs...) = ''_dashstickycontainer(children_maker(); kwargs...)

