# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashStickyContainer <- function(children=NULL, id=NULL, className=NULL, title=NULL, top=NULL) {
    
    props <- list(children=children, id=id, className=className, title=title, top=top)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashStickyContainer',
        namespace = 'dash_sticky_container',
        propNames = c('children', 'id', 'className', 'title', 'top'),
        package = 'dashStickyContainer'
        )

    structure(component, class = c('dash_component', 'list'))
}
