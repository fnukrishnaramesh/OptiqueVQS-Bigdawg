package eu.optiquevqs.server;

public class Stop {

    public static void main(String[] args) throws Exception {
        if (args.length == 1) {
            JettyStart.stop(Integer.valueOf(args[0]));
        } else {
        	JettyStart.stop();

        }

    }
}
