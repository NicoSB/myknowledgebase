package ch.nicosb.opensource.myknowledgebase.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.util.ContentCachingRequestWrapper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

@Slf4j
public class EntryRequestInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpServletRequest requestCacheWrapper = new ContentCachingRequestWrapper(request);
        requestCacheWrapper.getParameterMap();

        String logString = buildRequestLogString(requestCacheWrapper);
        log.info("[inbound] ---- {}", logString);

        return true;
    }

    private String buildRequestLogString(HttpServletRequest requestCacheWrapper) throws IOException {
        BufferedReader reader = requestCacheWrapper.getReader();
        StringBuilder body = new StringBuilder();
        String method = requestCacheWrapper.getMethod();
        String path = requestCacheWrapper.getServletPath();

        body.append(path);
        body.append(" ---- ");
        body.append(method);
        body.append('\n');

        if (method.equals(RequestMethod.POST.name())) {
            String line = "";
            while ((line = reader.readLine()) != null) {
                body.append(line);
                body.append('\n');
            }
        }

        return body.toString();
    }
}
